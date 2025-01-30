import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form, notification } from "antd";

const SensitivePagesAuth = props => {
  const history = useHistory();
  const userInfo = useSelector(state => state.user);
  // eslint-disable-next-line no-unused-vars
  const [pageAccessStatus, setPageAccessStatus] = useState(
    userInfo.sensitivePageAccess,
  );

  //modal
  const [modalForm] = Form.useForm();
  const [sensitiveModal, setsensitiveModalVisible] = useState(props.visibility);

  useEffect(() => {
    setsensitiveModalVisible(props.visibility);
    history.listen(() => {
      setsensitiveModalVisible(props.visibility);
    });
  }, [props.visibility, history]);

  //TODO: Remove useEffect and state if its redundant
  useEffect(() => {
    setPageAccessStatus(userInfo.sensitivePageAccess);
  }, [setPageAccessStatus, userInfo.sensitivePageAccess]);

  const handleOkSensitiveModal = inputValue => {};

  const handleCancelSensitiveModal = async () => {
    notification.error({
      message: "خطای دسترسی",
      description: "مجوز دسترسی به این صفحه را ندارید",
      placement: "bottomLeft",
    });

    if (window.localStorage.getItem("salariesReportParams")) {
      window.localStorage.removeItem("salariesReportParams");
      window.setTimeout(() => {
        window.close();
      }, 1500);
    }

    // Create the event
    var event = new CustomEvent("AuthEvent", {
      detail: false,
    });

    document.dispatchEvent(event);
    setsensitiveModalVisible(false);
    modalForm.resetFields();
  };

  const sensitivePageAccessModalFields = [
    {
      label: "نام کاربری",
      name: "username",
      type: "input",
      defaultValue: `${userInfo.username}`,
      disabled: true,
    },
    {
      label: "رمز عبور",
      name: "password",
      type: "password",
    },
  ];

  return (
    <Form
      modalFields={sensitivePageAccessModalFields}
      modalVisibility={sensitiveModal}
      zIndex={999999}
      className={"SensitiveAuth"}
      layout="vertical"
      formTitle={modalForm}
      name="addRoleModal"
      title="مجددا احراز هویت نمایید"
      okText="ثبت"
      onOk={handleOkSensitiveModal}
      cancelText="لغو"
      onCancel={handleCancelSensitiveModal}
      resultTable={false}
      sm={24}
      rowGutter={35}
    />
  );
};

export default SensitivePagesAuth;
