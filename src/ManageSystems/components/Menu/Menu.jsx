import {AutoComplete, Button, notification, Popconfirm, Skeleton, Table, Tooltip,} from "antd";
import {useState} from "react";
import CrudBtn from "base/components/CrudBtn/CrudBtn";
import CUMenu from "./CUMenu";
import "./Menu.scss";
import {useGetApiCall} from "base/hooks/useGetApiCall";
import ErrorSection from "base/components/ErrorSection/ErrorSection";
import {AiFillEdit, AiOutlineDelete, AiOutlineOrderedList,} from "react-icons/ai";
import {useHistory, useParams} from "react-router";
import {Link} from "react-router-dom";
import {asyncHttpRequest} from "base/services/asyncHttpRequest";

const ManageSystemMenu = () => {
  const {id} = useParams();
  const [state, setState] = useState("");
  const [selectedClientId, setSelectedClientId] = useState(id);

  const history = useHistory();
  const {
    response: clientsData,
    status: clientsStatus,
    refetchApi: clientsRefetch,
  } = useGetApiCall({
    endpoint: "/clients",
  });

  const {
    response: responseMenu,
    status,
    refetchApi: responseMenuRefetch,
  } = useGetApiCall({
    endpoint: `/menus/client-id/${selectedClientId}`,
    enabled: !!selectedClientId,
  });

  const handleDelete = (value) => {
    asyncHttpRequest({method: "DELETE", endpoint: `menus/${value.id}`})
      .then(() => {
        notification.success({
          message: "عملیات حذف با موفقیت انجام شد",
          placement: "bottomLeft",
        });
        responseMenuRefetch();
      })
      .catch((err) => {
        notification.error({
          message: err?.message || "خطا در حذف",
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
      title: "منوی پدر",
      dataIndex: "parentName",
      render: (item) => <>{item ?? "-"}</>,
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
      title: "عملیات",
      dataIndex: "parentId",
      render: (text, value) => (
        <div className="table-action-section">
          <Tooltip title=" لیست منابع">
            <Button>
              <Link
                to={{
                  pathname: `/resources/${value.id}`,
                  state: {clientId: selectedClientId},
                }}
                state={{id: value.id}}
              >
                <AiOutlineOrderedList/>
              </Link>
            </Button>
          </Tooltip>
          <Popconfirm
            title="آیا از حذف منو اطمینان دارید؟"
            onConfirm={() => handleDelete(value)}
          >
            <Button>
              <AiOutlineDelete/>
            </Button>
          </Popconfirm>
          <Tooltip title="ویرایش">
            <Button onClick={() => setState(value)}>
              <AiFillEdit/>
            </Button>
          </Tooltip>
        </div>
      ),
    },
  ];

  function handleBack(needRefresh) {
    if (needRefresh) {
      responseMenuRefetch();
    }
    setState("");
  }

  if (state === "new") {
    return <CUMenu onBack={handleBack} clientId={selectedClientId}/>;
  }

  if (state) {
    return (
      <CUMenu
        onBack={handleBack}
        clientId={selectedClientId}
        selectedMenu={state}
      />
    );
  }

  return (
    <div className="menu-section">
      <h3>سامانه:</h3>
      {clientsStatus === "rejected" ? (
        <ErrorSection handleRefresh={clientsRefetch}/>
      ) : clientsStatus === "pending" ? (
        <div className="skeleton-section">
          <Skeleton.Input active className="skeleton"/>
        </div>
      ) : clientsStatus === "resolved" && clientsData ? (
        <div className="client-section">
          <AutoComplete
            onSelect={(value, item) => {
              setSelectedClientId(item.key);
              history.push(`menu/${item.key}`);
            }}
            filterOption={(inputValue, option) =>
              option.children.includes(inputValue)
            }
            placeholder={"سامانه را انتخاب کنید"}
            className="menu-client-autocomplete"
            defaultValue={
              clientsData?.data?.find((client) => {
                return client?.id === selectedClientId;
              })?.description
            }
            allowClear
          >
            {clientsData?.data
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
        </div>
      ) : (
        <>...</>
      )}
      {selectedClientId && (
        <>
          <h4>لیست منو ها</h4>
          <Table
            columns={columns}
            dataSource={responseMenu?.data}
            loading={status === "pending"}
            rowKey={"id"}
          />
          <CrudBtn
            onNew={() => {
              setState("new");
            }}
          />
        </>
      )}
    </div>
  );
};

export default ManageSystemMenu;
