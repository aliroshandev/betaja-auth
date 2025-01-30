import { Button, notification, Popconfirm, Table, Tooltip } from "antd";
import { useGetApiCall } from "base/hooks/useGetApiCall";
import { useState } from "react";
import CrudBtn from "base/components/CrudBtn/CrudBtn";
import CUPermission from "./CUPermission";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { asyncHttpRequest } from "base/services/asyncHttpRequest";

const Permissions = () => {
  const [selectedPermission, setSelectedPermission] = useState();
  const {
    response: roleData,
    isFetching,
    refetchApi,
  } = useGetApiCall({
    endpoint: "/api/permissions?pageSize=10&currentPage=1",
  });

  const handleDelete = (value) => {
    asyncHttpRequest({
      method: "DELETE",
      endpoint: `api/permissions/${value.id}`,
    })
      .then(() => {
        notification.success({
          message: "عملیات حذف با موفقیت انجام شد",
          placement: "bottomLeft",
        });
        refetchApi();
      })
      .catch(() => {
        notification.error({
          message: "خطا در حذف",
          placement: "bottomLeft",
        });
      });
  };

  const columns = [
    {
      title: "ردیف",
      render: (text, value, i) => {
        return i + 1;
      },
    },
    {
      title: "عنوان",
      dataIndex: "title",
    },
    {
      title: "کلید",
      dataIndex: "key",
    },
    {
      title: "آدرس",
      dataIndex: "url",
    },
    {
      title: "متد درخواست",
      dataIndex: "httpRequestMethod",
    },
    {
      title: "عملیات",
      dataIndex: "parentId",
      render: (text, value) => (
        <>
          <Popconfirm
            title="آیا از حذف دسترسی اطمینان دارید؟"
            onConfirm={() => handleDelete(value)}
          >
            <Button>
              <AiOutlineDelete />
            </Button>
          </Popconfirm>
          <Tooltip title="ویرایش">
            <Button
              type="link"
              danger
              onClick={() => setSelectedPermission(value)}
            >
              <AiFillEdit className="icon" />
            </Button>
          </Tooltip>
        </>
      ),
    },
  ];

  if (selectedPermission) {
    return (
      <CUPermission
        onBack={() => setSelectedPermission()}
        selectedPermission={selectedPermission}
        refetch={refetchApi}
      />
    );
  }

  return (
    <>
      <Table
        dataSource={roleData?.data?.rows || []}
        columns={columns}
        loading={isFetching}
      />
      <CrudBtn onNew={() => setSelectedPermission("new")} />
    </>
  );
};

export default Permissions;
