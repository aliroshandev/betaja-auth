import { Button, notification, Popconfirm, Table, Tooltip } from "antd";
import { useGetApiCall } from "base/hooks/useGetApiCall";
import { asyncHttpRequest } from "base/services/asyncHttpRequest";
import React, { useState } from "react";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import UserCU from "./UserCU";

const Users = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedUser, setSelectedUser] = useState();
  const {
    response: roleData,
    status,
    refetchApi,
  } = useGetApiCall({
    endpoint: "/api/user?pageSize=10&currentPage=1",
  });

  async function handleDelete(data) {
    setIsDeleting(true);
    asyncHttpRequest({
      method: "DELETE",
      endpoint: `api/user?id=${data.id}`,
    })
      .then(() => {
        notification.success({
          message: "عملیات حذف با موفقیت انجام شد",
          placement: "bottomLeft",
        });
        setIsDeleting(false);
        refetchApi();
      })
      .catch(() => {
        notification.error({
          message: "خطا در حذف کاربر",
          placement: "bottomLeft",
        });
        setIsDeleting(false);
      });
  }

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
      render: (text, value) => (
        <>
          {value.firstName} {value.lastName}
        </>
      ),
    },
    {
      title: "نام کاربری",
      dataIndex: "username",
    },
    {
      title: "عملیات",
      render: (text, value) => (
        <>
          <Tooltip title="حذف">
            <Popconfirm
              title="آیا از حذف کاربر اطمینان دارید؟"
              onConfirm={() => handleDelete(value)}
            >
              <Button>
                <AiOutlineDelete />
              </Button>
            </Popconfirm>
          </Tooltip>
          <Tooltip title="ویرایش">
            <Button type="link" danger onClick={() => setSelectedUser(value)}>
              <AiFillEdit className="icon" />
            </Button>
          </Tooltip>
        </>
      ),
    },
  ];

  function handleBack(needRefresh) {
    if (needRefresh) {
      refetchApi();
    }
    setSelectedUser();
  }

  if (selectedUser) {
    return <UserCU onBack={handleBack} selectedRole={selectedUser} />;
  }

  return (
    <>
      <Table
        dataSource={roleData?.data?.rows}
        loading={status === "pending" || isDeleting}
        columns={columns}
        rowKey="id"
      />
      <Button onClick={() => setSelectedUser("create")}>جدید</Button>
    </>
  );
};

export default Users;
