import React, { useEffect, useState } from "react";
import "./stimulsoftViewerWhiteblue.css";
import "./Reports.scss";
import { useHttpRequest } from "base/hooks/useHttpRequest";
import { Modal } from "antd";
export const Reports = ({ reportData, onClose }) => {
  var viewer = null;
  var designer = null;
  const [showDesigner, setShowDesigner] = useState(false);
  const [id, setId] = useState("new");
  const [showModal, setShowModal] = useState(false);

  const {
    response: reportResponse,
    isFetching: isFetchingReport,
    sendRequest: postReport,
    status: getReportStatus,
    error: getReportError,
  } = useHttpRequest();
  const {
    response: reportListResponse,
    isFetching: isFetchingListReport,
    sendRequest: postListReport,
    status: getReportListStatus,
    error: getReportListError,
  } = useHttpRequest();

  function createViewer() {
    window.Stimulsoft.Base.StiLicense.key =
      "6vJhGtLLLz2GNviWmUTrhSqnOItdDwjBylQzQcAOiHkcgIvwL0jnpsDqRpWg5FI5kt2G7A0tYIcUygBh1sPs7plofUOqPB1a4HBIXJB621mau2oiAIj+ysU7gKUXfjn/D5BocmduNB+ZMiDGPxFrAp3PoD0nYNkkWh8r7gBZ1v/JZSXGE3bQDrCQCNSy6mgby+iFAMV8/PuZ1z77U+Xz3fkpbm6MYQXYp3cQooLGLUti7k1TFWrnawT0iEEDJ2iRcU9wLqn2g9UiWesEZtKwI/UmEI2T7nv5NbgV+CHguu6QU4WWzFpIgW+3LUnKCT/vCDY+ymzgycw9A9+HFSzARiPzgOaAuQYrFDpzhXV+ZeX31AxWlnzjDWqpfluygSNPtGul5gyNt2CEoJD1Yom0VN9fvRonYsMsimkFFx2AwyVpPcs+JfVBtpPbTcZscnzUdmiIvxv8Gcin6sNSibM6in/uUKFt3bVgW/XeMYa7MLGF53kvBSwi78poUDigA2n12SmghLR0AHxyEDIgZGOTbNI33GWu7ZsPBeUdGu55R8w=";
    window.Stimulsoft.Base.Localization.StiLocalization.addLocalizationFile(
      "/ReportsJS/locale/fa.xml",
      true
    );
    window.Stimulsoft.Base.Localization.StiLocalization.setLocalizationFile(
      "/ReportsJS/locale/fa.xml",
      true
    );
    var options = new window.Stimulsoft.Viewer.StiViewerOptions();
    options.toolbar.visible = true;

    options.toolbar.showBookmarksButton = false;
    options.toolbar.showOpenButton = false;

    options.exports.showExportDialog = false;
    options.exports.showExportToCsv = false;
    options.exports.showExportToDocument = false;
    options.exports.showExportToHtml = false;
    options.exports.showExportToHtml5 = false;
    options.exports.showExportToImageSvg = false;
    options.exports.showExportToJson = false;
    options.exports.showExportToOpenDocumentCalc = false;
    options.exports.showExportToOpenDocumentWriter = false;
    options.exports.showExportToText = false;

    options.exports.showExportToPowerPoint = true;
    options.exports.showExportToExcel2007 = true;
    options.exports.showExportToWord2007 = true;

    options.exports.showExportToPdf = true;

    options.appearance.scrollbarsMode = true;
    options.toolbar.printDestination =
      window.Stimulsoft.Viewer.StiPrintDestination.Direct;

    options.toolbar.showDesignButton = true;
    viewer = new window.Stimulsoft.Viewer.StiViewer(
      options,
      "StiViewer",
      false
    );

    viewer.onDesignReport = function (e) {
      viewer.visible = false;
      if (designer == null) createDesigner();
      designer.visible = true;
      designer.report = e.report;
      setShowDesigner(true);
    };

    viewer.renderHtml("viewerContent");
  }

  function createDesigner() {
    var options = new window.Stimulsoft.Designer.StiDesignerOptions();
    options.appearance.fullScreenMode = true;
    options.appearance.htmlRenderMode =
      window.Stimulsoft.Report.Export.StiHtmlExportMode.Table;

    // Create an instance of the designer
    designer = new window.Stimulsoft.Designer.StiDesigner(
      options,
      "StiDesigner",
      false
    );
    designer.onOpenReport = async () => {
      postListReport({
        method: "get",
        endpoint: `report/get-reports`,
        data: {},
      }).then(() => {
        setShowModal(true);
      });
    };
    designer.onSaveReport = (args) => {
      postReport({
        method: "post",
        endpoint: `report/save-report?id=${id}&name=${args.fileName}&isTemplate=false`,
        data: args.report.saveToJsonString(),
      });
    };
    designer.onSaveAsReport = (args) => {
      postReport({
        method: "post",
        endpoint: `report/save-report?id=new&isTemplate=true`,
        data: args.report.saveToJsonString(),
      });
    };
    // Add the exit menu item event
    designer.onExit = function (e) {
      designer.visible = false;
      viewer.visible = true;
      onClose();
      setShowDesigner(false);
    };

    designer.renderHtml("designerContent");
  }

  function setReport(reportObject) {
    // Forcibly show process indicator
    viewer.showProcessIndicator();

    // Timeout need for immediate display loading report indicator
    setTimeout(function () {
      // Create a new report instance
      var report = new window.Stimulsoft.Report.StiReport();
      // Load reports from JSON object
      report.load(reportObject);

      // Assign the report to the viewer
      viewer.report = report;
    }, 50);
  }

  // Load first report after the page is loaded
  function onBodyLoad() {
    console.log("on body load");
    createViewer();
    // selectedButton = document.getElementById("SimpleList");
    // onButtonClick(selectedButton, SimpleList);
  }
  const designerStyle = {
    direction: "ltr",
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    zIndex: "9999",
  };
  useEffect(() => {
    onBodyLoad();

    setReport(reportData);
  }, []);

  return (
    <>
      <div style={{ padding: "4px" }} id="viewerContent"></div>
      <div style={showDesigner ? designerStyle : {}} id="designerContent"></div>

      <Modal
        key="12"
        title="انتخاب گزارش"
        visible={showModal}
        onCancel={() => {
          setShowModal(false);
        }}
        footer={null}
      >
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ردیف</th>
              <th>نام گزارش</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reportListResponse && reportListResponse.data? (
              reportListResponse.data.map((m, i) => {
                return (
                  <tr>
                    <td>{i}</td>
                    <td>{m.name}</td>
                    <td></td>
                  </tr>
                );
              })
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </Modal>
    </>
  );
};
