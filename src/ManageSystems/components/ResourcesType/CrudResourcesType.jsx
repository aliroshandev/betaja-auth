import { Form, notification } from "antd";
import RenderElement from "base/components/RenderElement/RenderElement";
import { asyncHttpRequest } from "base/services/asyncHttpRequest";
import React, { useState } from "react";
import { FormButtons } from "../Buttons/Buttons";

const CrudResourcesType = ({ onBack, selectedResource, isCreate }) => {
  const [form] = Form.useForm();
  const [isUpdating, setIsUpdating] = useState(false);

  const submitHandler = (data) => {
    setIsUpdating(false);
    asyncHttpRequest({
      method: isCreate ? "POST" : "PUT",
      endpoint: "api/resource-types/",
      data: {
        ...(isCreate ? {} : { id: selectedResource.id }),
        ...data,
      },
    })
      .then((res) => {
        notification.success({
          message: "تغییرات با موفقیت اعمال شد",
          placement: "bottomLeft",
        });
        setIsUpdating(false);
        onBack(true);
      })
      .catch((e) => {
        notification.error({
          message: "خطا در اعمال تغییرات",
          placement: "bottomLeft",
        });
        setIsUpdating(false);
      });
    // setIsAddPushed(false);
  };

  const ITEMS = [
    {
      label: "عنوان",
      name: "title",
      type: "text",
      defaultValue: selectedResource.title,
    },
  ];

  return (
    <Form onFinish={submitHandler}>
      {ITEMS.map((item) => (
        <RenderElement searchForm={form} {...item} />
      ))}
      <FormButtons onBack={onBack} isUpdating={isUpdating} />
    </Form>
  );
};

export default CrudResourcesType;
