import {Table} from "antd";
import {useGetApiCall} from "base/hooks/useGetApiCall";

const Roles = () => {
  const {response: roleData, status} = useGetApiCall({
    endpoint: "/api/roles?pageSize=10&currentPage=1",
  });

  const columns = [
    {
      title: "ردیف",
      render: (text, value, i) => {
        return i + 1;
      },
    },
    {
      title: "نام",
      dataIndex: "name",
    },
    {
      title: "توضیحات",
      dataIndex: "description",
    },
  ];

  return (
    <>
      <Table
        dataSource={roleData?.data}
        loading={status === "pending"}
        columns={columns}
        rowKey="id"
      />
    </>
  );
};

export default Roles;
