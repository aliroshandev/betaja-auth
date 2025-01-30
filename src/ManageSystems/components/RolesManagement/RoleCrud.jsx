import {Col, Form, notification, Row} from "antd";
import {useEffect, useMemo, useState} from "react";
import {useForm} from "antd/es/form/Form";
import RenderElement from "base/components/RenderElement/RenderElement";
import {asyncHttpRequest} from "base/services/asyncHttpRequest";
import {FormButtons} from "../Buttons/Buttons";

const englishCharRegex = /^[a-zA-Z0-9ـ ]+$/;

const RoleCrud = ({selectedRole, onBack, clientId}) => {
  const IS_CREATE = selectedRole === "create";
  const [roleForm] = useForm();
  const [isUpdating, setIsUpdating] = useState(false);
  // const [isActive, setIsActive] = useState(!!selectedRole?.composite);

  useEffect(() => {
    if (selectedRole) {
      roleForm.setFieldsValue({
        description: selectedRole?.description,
        name: selectedRole?.name,
      });
    }
  }, [roleForm, selectedRole]);

  const ITEMS = useMemo(
    () => [
      {
        name: "description",
        label: "نام فارسی",
        type: "text",
        size: 8,
        defaultValue: selectedRole?.description,
        rules: [
          {
            required: true,
            message: "وارد کردن نام فارسی الزامی میباشد",
          },
        ],
      },
      {
        name: "name",
        label: "کلید",
        type: "text",
        size: 8,
        defaultValue: selectedRole?.name,
        isDisabled: selectedRole?.name,
        rules: [
          {
            required: true,
            message: "وارد کردن کلید الزامی میباشد",
          },
          {
            pattern: englishCharRegex,
            message: "از حروف انگلیسی باید استفاده شود",
          },
        ],
      },
    ],
    [selectedRole?.description, selectedRole?.name]
  );

  async function onSubmit(data) {
    let temp = {};
    for (let [key, value] of Object.entries(data)) {
      if (value) {
        temp[key] = value;
      }
    }
    setIsUpdating(true);
    asyncHttpRequest({
      method: IS_CREATE ? "POST" : "PUT",
      endpoint: "api/roles",
      data: {
        ...(!IS_CREATE && selectedRole),
        ...temp,
        composite: true,
        clientId,
      },
    })
      .then((res) => {
        setIsUpdating(false);
        onBack(true);
        notification.success({
          message: "عملیات با موفقیت انجام شد",
          placement: "bottomLeft",
        });
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
    <Form form={roleForm} onFinish={onSubmit}>
      <Row>
        {ITEMS.map((item) => (
          <Col key={item.name} span={item.size}>
            <RenderElement searchForm={roleForm} {...item} />
          </Col>
        ))}
        {/* <Col span={8} className="role-crud-checkbox">
          <Form.Item label={"فعال باشد"} name="composite">
            <Checkbox
              defaultChecked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
            />
          </Form.Item>
        </Col> */}
      </Row>
      <FormButtons onBack={onBack} isUpdating={isUpdating}/>
    </Form>
  );
};

export default RoleCrud;
