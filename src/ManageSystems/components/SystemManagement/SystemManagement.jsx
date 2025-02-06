import React, {useEffect, useMemo, useState} from 'react'
import {Checkbox, Col, Form, notification, Row, Skeleton} from "antd";
import {useForm} from "antd/es/form/Form";
import {SubmitBtn} from "../Buttons/Buttons";
// import { useMutation, useQuery } from "react-query";
// import ErrorSection from "components/ErrorSection/ErrorSection";
import {useGetApiCall} from "base/hooks/useGetApiCall";
import RenderElement from "base/components/RenderElement/RenderElement";
import ErrorSection from "base/components/ErrorSection/ErrorSection";
import {asyncHttpRequest} from "../../../base/services/asyncHttpRequest";

const SystemManagement = () => {

  const {
    response: systemData,
    status: systemDataStatus,
    refetchApi: systemRefetch,
  } = useGetApiCall({
    endpoint: "/realm/setting"
  });

  useEffect(() => {
    setIsNotEmail(systemData?.data?.notEmail)
    setIsNotUsername(systemData?.data?.notUsername)
    console.log(systemData?.data)
  }, [systemData])

  const [systemForm] = useForm();
  const [isNotUsername, setIsNotUsername] = useState(!!systemData?.data?.notUsername);
  const [isNotEmail, setIsNotEmail] = useState(!!systemData?.data?.notEmail);
  const [isUpdating, setIsUpdating] = useState(false);

  const ITEMS = useMemo(
    () => [
      {
        name: "accessTokenLifespan",
        label: "طول عمر توکن دسترسی",
        type: "number",
        // size: 8,
        // defaultValue: systemData?.data?.accessTokenLifespan,
        rules: [
          {
            required: true,
            message: "وارد کردن الزامی میباشد",
          },
        ],
      },
      {
        name: "passwordHistoryCount",
        label: "تعداد تاریخچه رمز عبور",
        type: "number",
        // size: 8,
        // defaultValue: systemData?.data?.passwordHistoryCount,
        rules: [
          {
            required: true,
            message: "وارد کردن الزامی میباشد",
          },
        ],
      },
      {
        name: "waitIncrementSecond",
        label: "ثانیه های افزایش انتظار",
        type: "number",
        // size: 8,
        // defaultValue: systemData?.data?.waitIncrementSecond,
        rules: [
          {
            required: true,
            message: "وارد کردن الزامی میباشد",
          },
        ],
      },
      {
        name: "passwordChangeInterval",
        label: "دوره تغییر رمز عبور",
        type: "number",
        // size: 8,
        // defaultValue: systemData?.data?.passwordChangeInterval,
        rules: [
          {
            required: true,
            message: "وارد کردن الزامی میباشد",
          },
        ],
      },
      {
        name: "maxFailedLoginAttempts",
        label: "بیشینه اقدام های ورود نا موفق",
        type: "number",
        // size: 8,
        // defaultValue: systemData?.data?.maxFailedLoginAttempts,
        rules: [
          {
            required: true,
            message: "وارد کردن الزامی میباشد",
          },
        ],
      },
      {
        name: "userLockDuration",
        label: "مدت زمان قفل کاربر",
        type: "number",
        // size: 8,
        // defaultValue: systemData?.data?.userLockDuration,
        rules: [
          {
            required: true,
            message: "وارد کردن الزامی میباشد",
          },
        ],
      },
      {
        name: "minPasswordLength",
        label: "کمینه طول رمز عبور",
        type: "number",
        // size: 8,
        // defaultValue: systemData?.data?.minPasswordLength,
        rules: [
          {
            required: true,
            message: "وارد کردن الزامی میباشد",
          },
        ],
      },
      {
        name: "minUpperCaseLetters",
        label: "کمینه حروف بزرگ",
        type: "number",
        // size: 8,
        // defaultValue: systemData?.data?.minUpperCaseLetters,
        rules: [
          {
            required: true,
            message: "وارد کردن الزامی میباشد",
          },
        ],
      },
      {
        name: "minLowerCaseLetters",
        label: "کمینه حروف کوچک",
        type: "number",
        // size: 8,
        // defaultValue: systemData?.data?.minLowerCaseLetters,
        rules: [
          {
            required: true,
            message: "وارد کردن الزامی میباشد",
          },
        ],
      },
      {
        name: "minSpecialCharacters",
        label: "کمینه کاراکتر های خاص",
        type: "number",
        // size: 8,
        // defaultValue: systemData?.data?.minSpecialCharacters,
        rules: [
          {
            required: true,
            message: "وارد کردن الزامی میباشد",
          },
        ],
      },
      {
        name: "minDigitsCharacters",
        label: "کمینه کاراکتر های عددی",
        type: "number",
        // size: 8,
        // defaultValue: systemData?.data?.minDigitsCharacters,
        rules: [
          {
            required: true,
            message: "وارد کردن الزامی میباشد",
          },
        ],
      }
    ],
    []
  );

  function onSubmit(data) {
    // mutate({
    //     method: "POST",
    //     endpoint: "/realm/update-setting",
    //     data: {
    //         ...data,
    //         "notEmail": isNotEmail,
    //         "notUsername": isNotUsername
    //     },
    // })
    setIsUpdating(true);
    console.log(data);
    asyncHttpRequest({
      method: "POST",
      endpoint: "realm/update-setting",
      data: {
        ...data,
        "notEmail": isNotEmail ?? false,
        "notUsername": isNotUsername ?? false
      },
    })
      .then(() => {
        notification.success({
          message: "عملیات با موفقیت انجام شد",
          placement: "bottomLeft",
        });
        setIsUpdating(false);
        systemRefetch();
      })
      .catch(() => {
        notification.error({
          message: "خطا در انجام عملیات",
          placement: "bottomLeft",
        });
        setIsUpdating(false);
      });
  }

  return systemDataStatus === "rejected" ? (
    <ErrorSection handleRefresh={systemRefetch}/>
  ) : systemDataStatus === "pending" ? (
    <Skeleton active/>
  ) : (
    <Form onFinish={onSubmit}
          initialvalues={{
            accessTokenLifespan: systemData?.data?.accessTokenLifespan,
            passwordHistoryCount: systemData?.data?.passwordHistoryCount,
            waitIncrementSecond: systemData?.data?.waitIncrementSecond,
            passwordChangeInterval: systemData?.data?.passwordChangeInterval,
            maxFailedLoginAttempts: systemData?.data?.maxFailedLoginAttempts,
            userLockDuration: systemData?.data?.userLockDuration,
            minPasswordLength: systemData?.data?.minPasswordLength,
            minUpperCaseLetters: systemData?.data?.minUpperCaseLetters,
            minLowerCaseLetters: systemData?.data?.minLowerCaseLetters,
            minSpecialCharacters: systemData?.data?.minSpecialCharacters,
            minDigitsCharacters: systemData?.data?.minDigitsCharacters
          }}>
      <Row>
        <Col span={12}>
          {ITEMS.slice(0, ITEMS.length / 2).map((item, index) => (
            <Col key={item.name} span={item.size}>
              <RenderElement searchForm={systemForm} {...item} />
            </Col>
          ))}
          <Col span={12}>
            <Form.Item label={"نبود نام کاربری"} name="notUsername">
              <Checkbox
                checked={isNotUsername}
                onChange={(e) => setIsNotUsername(e.target.checked)}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label={"نبود ایمیل"} name="notEmail">
              <Checkbox
                checked={isNotEmail}
                onChange={(e) => setIsNotEmail(e.target.checked)}
              />
            </Form.Item>
          </Col>
        </Col>
        <Col span={8}>
          {ITEMS.slice(ITEMS.length / 2, ITEMS.length).map((item, index) => (
            <Col key={item.name} span={item.size}>
              <RenderElement searchForm={systemForm} {...item} />
            </Col>
          ))}
        </Col>
      </Row>
      <SubmitBtn
        isUpdating={isUpdating}
      />
    </Form>
  );
};

export default SystemManagement;
