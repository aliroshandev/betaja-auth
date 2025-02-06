import {Skeleton, Table,} from "antd";
import {useGetApiCall} from "base/hooks/useGetApiCall";
import ErrorSection from "base/components/ErrorSection/ErrorSection";
import moment from "jalali-moment";

const Events = () => {
  // const history = useHistory();
  const {
    response: eventsData,
    status: eventsStatus,
    refetchApi: eventsRefetch,
  } = useGetApiCall({
    endpoint: "/realm/event?currentPage=1&pageSize=10",
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
    <div className="events-section">
      {eventsStatus === "rejected" ? (
        <ErrorSection handleRefresh={eventsRefetch}/>
      ) : eventsStatus === "pending" ? (
        <div className="skeleton-section">
          <Skeleton.Input active className="skeleton"/>
        </div>
      ) : eventsStatus === "resolved" ? (
        <>
          <div style={{margin: "20px"}}>
            <h2>لیست وقایع</h2>
          </div>
          <Table
            columns={columns}
            dataSource={eventsData?.data}
            loading={eventsStatus === "pending"}
            rowKey={"id"}
          />

        </>
      ) : null}
    </div>
  );
};

export default Events;
