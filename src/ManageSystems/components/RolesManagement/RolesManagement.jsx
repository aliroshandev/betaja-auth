import {useGetApiCall} from "base/hooks/useGetApiCall";
import {AutoComplete, Button, Form, notification, Popconfirm, Skeleton, Table, Tooltip,} from "antd";
import React, {useMemo, useState} from "react";
import ErrorSection from "base/components/ErrorSection/ErrorSection";
import {useHistory} from "react-router";
import RoleCrud from "./RoleCrud";
import {AiFillEdit, AiOutlineDelete, AiOutlineUsergroupAdd,} from "react-icons/ai";
import "./RolesManagement.scss";
import {asyncHttpRequest} from "base/services/asyncHttpRequest";
import AssignRoleToUser from "./AssignRoleToUser";
import CrudBtn from "base/components/CrudBtn/CrudBtn";

const RolesManagement = (props) => {
  const history = useHistory();
  const {clientId} = props?.location?.state || 0;
  const [selectedClientId, setSelectedClientId] = useState(clientId);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedRole, setSelectedRole] = useState();
  const [addUserRole, setAddUserRole] = useState(false);
  const {
    response: clients,
    status: clientsStatus,
    refetchApi: clientsRefetch,
  } = useGetApiCall({
    endpoint: "/api/clients",
  });

  const {
    response: roles,
    status: rolesStatus,
    refetchApi: rolesRefetch,
  } = useGetApiCall({
    endpoint: `/api/roles/client-id?clientId=${selectedClientId}&currentPage=1&pageSize=100`,
    enabled: !!selectedClientId,
  });

  const handleDelete = useMemo(async (data) => {
    setIsDeleting(true);
    console.log(selectedClientId);
    const temp = {
      ...data,
      clientId: selectedClientId,
    };
    asyncHttpRequest({method: "DELETE", endpoint: "api/roles", data: temp})
      .then(() => {
        notification.success({
          message: "عملیات حذف با موفقیت انجام شد",
          placement: "bottomLeft",
        });
        setIsDeleting(false);
        rolesRefetch();
      })
      .catch(() => {
        notification.error({
          message: "خطا در حذف نقش",
          placement: "bottomLeft",
        });
        setIsDeleting(false);
      });
  }, [rolesRefetch, selectedClientId]);

  const columns = useMemo(
    () => [
      {
        title: "ردیف",
        render: (text, value, i) => {
          return i + 1;
        },
      },
      {
        title: "کلید",
        dataIndex: "name",
      },
      {
        title: "نام",
        dataIndex: "description",
      },
      {
        title: "عملیات",
        dataIndex: "actions",
        key: "actions",
        render: (text, value) => (
          <div className="action-section">
            <Tooltip title="کاربران">
              <Button
                onClick={() => {
                  setAddUserRole(true);
                  setSelectedRole({
                    ...value,
                    clientId: selectedClientId,
                    clientName: clients?.data?.find(
                      (client) => client.id === selectedClientId
                    )?.description,
                  });
                }}
              >
                <AiOutlineUsergroupAdd/>
              </Button>
            </Tooltip>
            <Tooltip title="حذف">
              <Popconfirm
                title="آیا از حذف نقش اطمینان دارید؟"
                onConfirm={() => handleDelete(value)}
              >
                <Button>
                  <AiOutlineDelete/>
                </Button>
              </Popconfirm>
            </Tooltip>
            <Tooltip title="ویرایش">
              <Button onClick={() => setSelectedRole(value)}>
                <AiFillEdit/>
              </Button>
            </Tooltip>
          </div>
        ),
      },
    ],
    [handleDelete, selectedClientId, clients?.data]
  );

  function handleBack(needRefresh) {
    if (needRefresh) {
      rolesRefetch();
    }
    setSelectedRole();
  }

  if (addUserRole && selectedRole) {
    return (
      <AssignRoleToUser
        onBack={() => {
          setAddUserRole(false);
          setSelectedRole();
        }}
        selectedRole={selectedRole}
      />
    );
  }

  if (selectedRole) {
    return (
      <RoleCrud
        onBack={handleBack}
        selectedRole={selectedRole}
        clientId={selectedClientId}
      />
    );
  }

  return (
    <div>
      {clientsStatus === "pending" ? (
        <Skeleton.Input active/>
      ) : clientsStatus === "rejected" ? (
        <ErrorSection handleRefresh={clientsRefetch}/>
      ) : clientsStatus === "resolved" && clients?.data ? (
        <>
          <Form.Item label="سامانه" className="autocomplete-input">
            <AutoComplete
              onSelect={(value, item) => {
                setSelectedClientId(item.key);
                history.push(`/roles-management/${item.key}`);
              }}
              filterOption={(inputValue, option) =>
                option.children.includes(inputValue)
              }
              defaultValue={
                clients?.data?.find((client) => client.id === selectedClientId)
                  ?.description
              }
              allowClear
            >
              {clients?.data
                ?.filter((client) => client.description)
                ?.map((client) => {
                  return (
                    <AutoComplete.Option
                      key={client.id}
                      value={client.description}
                    >
                      {`${client.description}`}
                    </AutoComplete.Option>
                  );
                })}
            </AutoComplete>
          </Form.Item>
        </>
      ) : (
        <></>
      )}

      {rolesStatus === "resolved" ? (
        <>
          <Table
            loading={rolesStatus === "pending" || isDeleting}
            columns={columns}
            dataSource={roles?.data}
          />
          <CrudBtn onNew={() => setSelectedRole("create")}/>
        </>
      ) : rolesStatus === "rejected" ? (
        <ErrorSection handleRefresh={rolesRefetch}/>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RolesManagement;
