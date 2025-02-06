import {Col, Form, notification, Row} from "antd";
import RenderElement from "base/components/RenderElement/RenderElement";
import {asyncHttpRequest} from "base/services/asyncHttpRequest";
import React, {useEffect, useState} from "react";
import {FormButtons} from "../Buttons/Buttons";

const CUPermission = ({onBack, selectedPermission, refetch}) => {
  const isCreate = selectedPermission === "new";
  const [isUpdating, setIsUpdating] = useState(false);
  const [menuForm] = Form.useForm();

  useEffect(() => {
    if (selectedPermission) {
      menuForm.setFieldsValue({
        title: selectedPermission?.title,
        key: selectedPermission?.key,
      });
    }
  }, [menuForm, selectedPermission]);

  const ITEMS = [
    {
      label: "عنوان",
      name: "title",
      type: "text",
      size: 12,
      rules: [
        {
          required: true,
          message: "این فیلد اجباری است",
        },
      ],
      defaultValue: isCreate ? "" : selectedPermission.title,
    },
    {
      label: "کلید",
      name: "key",
      type: "text",
      size: 12,
      rules: [
        {
          required: true,
          message: "این فیلد اجباری است",
        },
      ],
      defaultValue: isCreate ? "" : selectedPermission.key,
    },
    {
      label: "آدرس",
      name: "url",
      type: "text",
      size: 12,
      rules: [
        {
          required: true,
          message: "این فیلد اجباری است",
        },
      ],
      defaultValue: isCreate ? "" : selectedPermission.title,
    },
    {
      label: "متد درخواست",
      name: "httpRequestMethod",
      type: "text",
      size: 12,
      rules: [
        {
          required: true,
          message: "این فیلد اجباری است",
        },
      ],
      defaultValue: isCreate ? "" : selectedPermission.title,
    },

  ];

  async function onSubmit(values) {
    console.log(values);
    const temp = menuForm.getFieldsValue();
    await asyncHttpRequest({
      method: isCreate ? "post" : "PUT",
      endpoint: "permissions",
      data: {
        ...(isCreate ? {} : {id: selectedPermission.id}),
        ...temp,
      },
    })
      .then((res) => {
        notification.success({
          message: "عملیات با موفقیت انجام شد",
          placement: "bottomLeft",
        });
        refetch();
        setIsUpdating(false);
        onBack();
      })
      .catch((rej) => {
        notification.error({
          message: "خطا در انجام عملیات",
          placement: "bottomLeft",
        });
        setIsUpdating(false);
      });
  }

  return (
    <Form form={menuForm} onFinish={onSubmit}>
      <Row gutter={[16]}>
        {ITEMS.map((item) => (
          <Col key={item.name} span={item.size}>
            <RenderElement searchForm={menuForm} {...item} />
          </Col>
        ))}
      </Row>

      <FormButtons onBack={onBack} isUpdating={isUpdating}/>
    </Form>
  );
};

export default CUPermission;
