import CrudBtn from "base/components/CrudBtn/CrudBtn";
import React, {useMemo, useState} from "react";
import {useGetApiCall} from "base/hooks/useGetApiCall";
import {AutoComplete, Button, Form, notification, Popconfirm, Spin, Table, Tooltip,} from "antd";
import "./Resources.scss";
import CrudResource from "./CrudResource";
import {useHistory, useParams} from "react-router";
import {Link} from "react-router-dom";
import {BackBtn} from "../Buttons/Buttons";
import ErrorSection from "base/components/ErrorSection/ErrorSection";
import {AiFillEdit, AiOutlineDelete} from "react-icons/ai";
import {asyncHttpRequest} from "base/services/asyncHttpRequest";

// const {createRoot} = ReactDOM;
// const {Button, Table } = antd;
// const {useState} = react;

const Resources = (props) => {
  const history = useHistory();
  const { clientId } = props?.location?.state || 0;
  if (!clientId) {
    history.push("menu");
  }

  const { id: menuId } = useParams();
  const [selectedClientId, setSelectedClientId] = useState(clientId);
  const {
    response: clients,
    status: clientsStatus,
    refetchApi: clientsRefetch,
  } = useGetApiCall({
    endpoint: "/clients",
  });

  const {
    response: menus,
    status: menusStatus,
    refetchApi: menusRefetch,
  } = useGetApiCall({
    endpoint: `/menus/client-id/${selectedClientId}`,
    enabled: !!selectedClientId,
  });

  const { response, isFetching, refetchApi } = useGetApiCall({
    endpoint: `/resources/menu-id/${menuId}`,
    enabled: !!menuId,
  });
  const [selectedResource, setSelectedResource] = useState("");

  const handleDelete = useMemo((value) => {
    asyncHttpRequest({
      method: "DELETE",
      endpoint: `api/resources/${value.id}`,
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
  }, [refetchApi]);

  const columns = useMemo(
    () => [
      {
        title: "ردیف",
        render: (text, value, i) => {
          return i + 1;
        },
      },
      {
        title: "عنوان",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "کلید",
        dataIndex: "key",
        key: "key",
      },
    {
        title: "آدرس",
        dataIndex: "url",
    },
      {
        title: "عملیات",
        dataIndex: "actions",
        key: "actions",
        render: (text, value) => (
          <>
            <Popconfirm
              title="آیا از حذف منبع اطمینان دارید؟"
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
                onClick={() => setSelectedResource(value)}
              >
                <AiFillEdit className="icon" />
              </Button>
            </Tooltip>
          </>
        ),
      },
    ],
    [handleDelete]
  );

  if (selectedResource) {
    return (
      <CrudResource
        onBack={() => setSelectedResource("")}
        refetch={refetchApi}
        clientId={selectedClientId}
        menuId={menuId}
        isCreate={selectedResource === "create"}
        selectedResource={
          selectedResource === "create" ? null : selectedResource
        }
      />
    );
  }

  return (
    <>
      <div className="header-section">
        <h2>
          منابع منو {menus?.data?.find((menu) => menu.id === menuId)?.title}
        </h2>
        <Link to={`/menu/${selectedClientId}`}>
          <BackBtn />
        </Link>
      </div>
      <div className="resource-autocomplete-inputs">
        <Form.Item label="سامانه">
          {clientsStatus === "pending" ? (
            <Spin />
          ) : clientsStatus === "rejected" ? (
            <ErrorSection handleRefresh={clientsRefetch} />
          ) : clientsStatus === "resolved" && clients?.data ? (
            <AutoComplete
              onSelect={(value, item) => {
                setSelectedClientId(item.key);
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
          ) : (
            <></>
          )}
        </Form.Item>
        <Form.Item label="منو">
          {menusStatus === "pending" ? (
            <Spin />
          ) : menusStatus === "rejected" ? (
            <ErrorSection handleRefresh={menusRefetch} />
          ) : menusStatus === "resolved" && selectedClientId ? (
            <AutoComplete
              onSelect={(value, item) => {
                history.push({
                  pathname: `resources/${item.key}`,
                  state: {
                    clientId: selectedClientId,
                  },
                });
              }}
              filterOption={(inputValue, option) =>
                option.children.includes(inputValue)
              }
              defaultValue={
                menus?.data?.find((menu) => menu.id === menuId)?.title
              }
            >
              {menus?.data?.map((client) => {
                return (
                  <AutoComplete.Option key={client.id} value={client.title}>
                    {`${client.title}`}
                  </AutoComplete.Option>
                );
              })}
            </AutoComplete>
          ) : (
            <></>
          )}
        </Form.Item>
      </div>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={response?.data}
      />
      <CrudBtn onNew={() => setSelectedResource("create")} />
    </>
  );
};

export default Resources;
