import { notification, Skeleton } from "antd";
import ErrorSection from "base/components/ErrorSection/ErrorSection";
import { useGetApiCall } from "base/hooks/useGetApiCall";
import { asyncHttpRequest } from "base/services/asyncHttpRequest";
import React, { useState } from "react";
import { BackBtn } from "../Buttons/Buttons";

const AssignRoleToUser = ({ onBack, selectedRole }) => {
  const [selectedUser, setSelectedUser] = useState();

  const {
    response: assignedUsers,
    status: assignedUsersStatus,
    refetchApi: assignedUsersRefetch,
  } = useGetApiCall({
    endpoint: `/api/user/get-by-client-and-role?clientId=${selectedRole.clientId}&roleName=${selectedRole.name}`,
    enabled: !!(selectedRole.clientId && selectedRole.name),
  });

  const {
    response: users,
    status: usersStatus,
    refetchApi: usersRefetch,
  } = useGetApiCall({
    endpoint: `/api/user?currentPage=1&pageSize=20`,
  });

  function addRoleToUser() {
    asyncHttpRequest({
      method: "POST",
      endpoint: "api/user/add-roles",
      data: {
        clientId: selectedRole.clientId,
        userId: selectedUser.id,
        roles: [
          {
            name: selectedRole.name,
            id: selectedRole.id,
          },
        ],
      },
    })
      .then((res) => {
        notification.success({
          message: `نقش ${selectedRole.name} به کاربر ${selectedUser.username} اضافه گردید`,
          placement: "bottomLeft",
        });
        setSelectedUser();
        assignedUsersRefetch();
      })
      .catch((e) => {
        notification.error({
          message: "خطا در اعمال تغییرات",
          placement: "bottomLeft",
        });
      });
  }

  function removeUserFromRole() {
    asyncHttpRequest({
      method: "DELETE",
      endpoint: `api/user/role-by-user-client-role?userId=${selectedUser.id}&clientId=${selectedRole.clientId}&roleName=${selectedRole.name}`,
    })
      .then((res) => {
        notification.success({
          message: `نقش ${selectedRole.name} از کاربر ${selectedUser.username} حذف گردید`,
          placement: "bottomLeft",
        });
        setSelectedUser();
        assignedUsersRefetch();
      })
      .catch((e) => {
        notification.error({
          message: "خطا در اعمال تغییرات",
          placement: "bottomLeft",
        });
      });
  }

  return (
    <div className="assign-role-to-user">
      <div
        className="top-section"
        style={{
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ textAlign: "right" }}>
          انتخاب کاربران نقش <strong>{selectedRole.description}</strong> در
          سامانه <strong>{selectedRole.clientName}</strong>
        </h2>
        <BackBtn onBack={onBack} />
      </div>
      <div className="transfer-list">
        <div className="users-list transfer-container">
          <p>لیست کل کاربران</p>
          {usersStatus === "pending" ? (
            <Skeleton active loading paragraph />
          ) : usersStatus === "rejected" ? (
            <ErrorSection handleRefresh={usersRefetch} />
          ) : usersStatus === "resolved" ? (
            <ul>
              {users?.data?.rows?.map((user) => {
                return (
                  <li
                    key={user.id}
                    className={
                      !selectedUser?.isAssigned && selectedUser?.id === user.id
                        ? "selected"
                        : ""
                    }
                    onClick={() =>
                      setSelectedUser({ ...user, isAssigned: false })
                    }
                  >{`${user.username} (${user.firstName || ""} ${
                    user.lastName || ""
                  })`}</li>
                );
              })}
            </ul>
          ) : null}
        </div>
        <div className="control-buttons">
          <button
            aria-label="user-to-assignee"
            disabled={
              !selectedUser || !(selectedUser?.id && !selectedUser?.isAssigned)
            }
            onClick={addRoleToUser}
          >
            {">"}
          </button>
          <button
            aria-label="unassign-user"
            disabled={
              !selectedUser || !(selectedUser?.id && selectedUser?.isAssigned)
            }
            onClick={removeUserFromRole}
          >
            {"<"}
          </button>
        </div>
        <div className="assigned-users-list transfer-container">
          <p>کاربران تخصیص داده شده</p>
          {assignedUsersStatus === "pending" ? (
            <Skeleton active loading paragraph />
          ) : assignedUsersStatus === "rejected" ? (
            <ErrorSection handleRefresh={assignedUsersRefetch} />
          ) : assignedUsersStatus === "resolved" ? (
            <ul>
              {assignedUsers?.data?.map((user) => {
                return (
                  <li
                    key={user.id}
                    className={
                      selectedUser?.isAssigned && selectedUser?.id === user.id
                        ? "selected"
                        : ""
                    }
                    onClick={() =>
                      setSelectedUser({ ...user, isAssigned: true })
                    }
                  >
                    {`${user.username} (${user.firstName || ""} ${
                      user.lastName || ""
                    })`}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AssignRoleToUser;
