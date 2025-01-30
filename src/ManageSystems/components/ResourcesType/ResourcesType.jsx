import { Button, Table, Tooltip } from "antd";
import CrudBtn from "base/components/CrudBtn/CrudBtn";
import ErrorSection from "base/components/ErrorSection/ErrorSection";
import { useGetApiCall } from "base/hooks/useGetApiCall";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import CrudResourcesType from "./CrudResourcesType";

const ResourcesType = () => {
  const [selectedResource, setSelectedResource] = useState();
  const { response, status, refetchApi } = useGetApiCall({
    endpoint: "/api/resource-types?pageSize=10&currentPage=1",
  });

  const COLUMNS = [
    {
      title: "ردیف",
      render: (text, value, i) => {
        return i + 1;
      },
    },
    {
      title: "نوع",
      dataIndex: "title",
    },
    {
      title: "عملیات",
      dataIndex: "parentId",
      render: (text, value) => (
        <Tooltip title="ویرایش">
          <Button type="link" danger onClick={() => setSelectedResource(value)}>
            <AiFillEdit className="icon" />
          </Button>
        </Tooltip>
      ),
    },
  ];

  if (selectedResource) {
    return (
      <CrudResourcesType
        isCreate={selectedResource === "create"}
        selectedResource={selectedResource}
        onBack={(needRefresh) => {
          refetchApi();
          setSelectedResource("");
        }}
      />
    );
  }

  return (
    <>
      <Table
        columns={COLUMNS}
        loading={status === "pending"}
        dataSource={response?.data?.rows}
      />
      {status === "rejected" && <ErrorSection handleRefresh={refetchApi} />}
      <CrudBtn onNew={() => setSelectedResource("create")} />
    </>
  );
};

export default ResourcesType;
