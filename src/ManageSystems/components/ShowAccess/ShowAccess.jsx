import React, { useState } from "react";
import { AutoComplete, Button, Col, Row, Skeleton } from "antd";
import { useGetApiCall } from "base/hooks/useGetApiCall";
import "./ShowAccess.scss";
import ErrorSection from "base/components/ErrorSection/ErrorSection";
import { AiOutlineTable } from "react-icons/ai";
import { HiOutlineRefresh } from "react-icons/hi";

const ShowAccess = () => {
  const [selectedClientId, setSelectedClientId] = useState("");
  const [selectedRoleId, setSelectedRoleId] = useState();
  const [showAccessTable, setShowAccessTable] = useState(false);

  const {
    response: clients,
    status: clientsStatus,
    refetchApi: clientsRefetch,
  } = useGetApiCall({
    endpoint: "/clients",
  });

  const {
    response: roles,
    status: rolesStatus,
    refetchApi: rolesRefetch,
  } = useGetApiCall({
    endpoint: `/roles/client-id?clientId=${selectedClientId}&pageSize=100&currentPage=1`,
    enabled: !!selectedClientId,
  });

  // const {
  //   response: accessRole,
  //   status: accessRoleStatus,
  //   refetchApi: accessRoleRefetch,
  // } = useGetApiCall({
  //   endpoint: `/access-role/role/${selectedRoleId}`,
  //   enabled: !!selectedRoleId,
  // });

  return (
    <div className="access-section">
      <Row>
        <Col md={8}>
          <div className="client-section">
            <h3>سامانه:</h3>
            {clientsStatus === "rejected" ? (
              <ErrorSection handleRefresh={clientsRefetch} />
            ) : clientsStatus === "pending" ? (
              <Skeleton.Input active />
            ) : (
              <AutoComplete
                className="search-form"
                onSelect={(value, item) => {
                  setSelectedClientId(item.key);
                }}
                filterOption={(inputValue, option) =>
                  option.children.includes(inputValue)
                }
                placeholder={"سامانه را انتخاب کنید"}
                disabled={showAccessTable}
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
            )}
          </div>
        </Col>

        <Col md={8}>
          <div className="client-section">
            <h3>نقش:</h3>
            {rolesStatus === "rejected" ? (
              <ErrorSection handleRefresh={rolesRefetch} />
            ) : rolesStatus === "pending" ? (
              <Skeleton.Input active />
            ) : (
              <AutoComplete
                className="search-form"
                onSelect={(value, item) => {
                  setSelectedRoleId(item.key);
                }}
                filterOption={(inputValue, option) =>
                  option.children.includes(inputValue)
                }
                placeholder={"نقش را انتخاب کنید"}
                disabled={showAccessTable}
                allowClear
              >
                {roles?.data?.rows?.map((client) => {
                  return (
                    <AutoComplete.Option key={client.id} value={client.name}>
                      {`${client.name}`}
                    </AutoComplete.Option>
                  );
                })}
              </AutoComplete>
            )}
          </div>
        </Col>
      </Row>
      {selectedRoleId && (
        <div className="control-button">
          <Button
            type="primary"
            onClick={() => setShowAccessTable(true)}
            disabled={showAccessTable}
          >
            مشاهده
            <AiOutlineTable />
          </Button>
          <Button
            type="danger"
            onClick={() => setShowAccessTable(false)}
            disabled={!showAccessTable}
          >
            انتخاب مجدد
            <HiOutlineRefresh />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ShowAccess;
