import {Col, Form, notification, Row} from "antd";
import {useMemo, useState} from "react";
import {useForm} from "antd/es/form/Form";
import RenderElement from "base/components/RenderElement/RenderElement";
import {asyncHttpRequest} from "base/services/asyncHttpRequest";
import {FormButtons} from "../Buttons/Buttons";

const englishCharRegex = /^[a-zA-Z0-9ـ ]+$/;

const UserCU = ({selectedRole, onBack}) => {
  const IS_CREATE = selectedRole === "create";
  const [roleForm] = useForm();
  const [isUpdating, setIsUpdating] = useState(false);
  // const [isActive, setIsActive] = useState(!!selectedRole?.composite);

  const ITEMS = useMemo(
    () => [
      {
        name: "firstName",
        label: "نام ",
        type: "text",
        size: 12,
        defaultValue: selectedRole?.firstName,
      },
      {
        name: "lastName",
        label: "نام خانوادگی",
        type: "text",
        size: 12,
        defaultValue: selectedRole?.lastName,
      },
      {
        name: "username",
        label: "نام کاربری",
        type: "text",
        size: 8,
        defaultValue: selectedRole?.username,
        rules: [
          {
            required: true,
            message: "وارد کردن نام کاربری الزامی میباشد",
          },
          {
            pattern: englishCharRegex,
            message: "از حروف انگلیسی باید استفاده شود",
          },
          4,
        ],
      },
      {
        name: "email",
        label: "ایمیل",
        type: "text",
        size: 8,
        defaultValue: selectedRole?.email,
        rules: [
          {
            required: true,
            message: "وارد کردن ایمیل الزامی میباشد",
          },
          {
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,5}$/,
            message: "ورودی باید ایمیل کاربر باشد.",
          },
          4,
        ],
      },
      {
        name: "mobile",
        label: "شماره تلفن",
        type: "text",
        size: 8,
        defaultValue: selectedRole?.attributes?.mobile[0],
        rules: [
          {
            required: true,
            message: "وارد کردن شماره تلفن الزامی میباشد",
          },
          {
            pattern: /[0-9]{11}/,
            message: "شماره تلفن خود را با صفر ابتدا وارد کنید.",
          }
        ],
      },
      {
        name: "password",
        label: "رمز عبور",
        type: "password",
        size: 12,
        defaultValue: selectedRole?.password,
        hasFeedback: true,
        rules: [
          {
            required: true,
            message: "وارد کردن رمز عبور الزامی میباشد",
          },
        ],
      },
      {
        name: "secondPassword",
        label: "تکرار رمز عبور",
        type: "password",
        size: 12,
        defaultValue: selectedRole?.secondPassword,
        dependencies: ['password'],
        hasFeedback: true,
        rules: [
          {
            required: true,
            message: "وارد کردن رمز عبور الزامی میباشد",
          },
          ({getFieldValue}) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('تکرار رمز عبور مطابقت ندارد!'));
            },
          }),
        ],
      },
    ],
    [
      selectedRole?.firstName,
      selectedRole?.lastName,
      selectedRole?.username,
      selectedRole?.email,
      selectedRole?.secondPassword,
      selectedRole?.password,
      selectedRole?.attributes?.mobile
    ],
  );

  async function onSubmit(data) {
    let temp = {};
    for (let [key, value] of Object.entries(data)) {
      if (value) {
        temp[key] = value;
      }
    }
    setIsUpdating(true);
    const attributes = {
      mobile: [
        temp.mobile
      ]
    }
    if (temp.mobile) {
      delete temp.mobile
    }
    console.log(temp)
    asyncHttpRequest({
      method: IS_CREATE ? "POST" : "PUT",
      endpoint: "user",
      data: {
        ...(!IS_CREATE && selectedRole),
        ...temp,
        attributes,
        userEnabled: true,
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
    <Form onFinish={onSubmit} initialValues={{
      firstName: selectedRole?.firstName,
      lastName: selectedRole?.lastName,
      email: selectedRole?.email,
      username: selectedRole?.username,
      password: selectedRole?.password,
      secondPassword: selectedRole?.password,
      mobile: selectedRole?.attributes?.mobile[0],
    }}>
      <Row gutter={[16]}>
        {ITEMS.map((item) => (
          <Col key={item.name} span={item.size}>
            <RenderElement searchForm={roleForm} {...item} />
          </Col>
        ))}
      </Row>
      <FormButtons onBack={onBack} isUpdating={isUpdating}/>
    </Form>
  );
};

export default UserCU;
