import {Skeleton, Table,} from "antd";
import {useGetApiCall} from "base/hooks/useGetApiCall";
import ErrorSection from "base/components/ErrorSection/ErrorSection";
import moment from "jalali-moment";
import React from "react";

const Manager = () => {
  // const history = useHistory();
  const {
    response: eventsData,
    status: eventsStatus,
    refetchApi: eventsRefetch,
  } = useGetApiCall({
    endpoint: "/api/realm/last-event-user",
  });

  // "eventType": "LOGIN",
  //     "username": "shahin",
  //     "ipAddress": "127.0.0.1",
  //     "date": "2024-06-11 11:56:26",
  //     "clientName": "applicant_srv",
  //     "alertLevel": "INFO"
  const columns = [
    {
      title: "ردیف",
      render: (text, value, i) => {
        console.log(text, i);
        return i + 1
      },
    },
    {
      title: "نوع رویداد",
      dataIndex: "eventType",
      render: (item) => <>{item ?? "-"}</>,
    },
    {
      title: "نام کاربری",
      dataIndex: "username",
    },
    {
      title: "آدرس IP",
      dataIndex: "ipAddress",
    },
    {
      title: "تاریخ",
      dataIndex: "date",
      render: (text, value) => (
        <div dir="ltr" className="table-action-section">
          {moment(text).format("jYYYY/jM/jD HH:mm:ss")}
        </div>
      ),
    },
    {
      title: "نام سامانه",
      dataIndex: "clientName",
    },
    {
      title: "سطح هشدار",
      dataIndex: "alertLevel",
      render: (text, value) => (
        <div className="table-action-section" key={value}>
          <h4 style={{
            margin: "0",
            padding: "5px",
            color: "white",
            borderRadius: "5px",
            backgroundColor: text === "ERROR" ? "red" : "blue"
          }}>{text}</h4>
        </div>
      )
    },
  ];

  return (
    <div className="events-section" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h2 style={{textAlign: "center", margin: "20px"}}>
        به سامانه جامع خدمات خوش آمدید.
      </h2>
      {eventsStatus === "rejected" ? (
        <ErrorSection handleRefresh={eventsRefetch}/>
      ) : eventsStatus === "pending" ? (
        <div className="skeleton-section">
          <Skeleton.Input active className="skeleton"/>
        </div>
      ) : eventsStatus === "resolved" ? (
        <div style={{width: "70%", flexDirection: "column", justifyContent: "flex-start"}}>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "20px"}}>
            <h3>وقایع اخیر</h3>
            {/*<Button onClick={() => history.push("/events")}>*/}
            {/*   مشاهده بیشتر*/}
            {/*</Button>*/}
          </div>
          <Table
            columns={columns}
            dataSource={eventsData?.data}
            loading={eventsStatus === "pending"}
            rowKey={"id"}
            pagination={false}
          />

        </div>
      ) : null}
    </div>
  );
};

export default Manager;
