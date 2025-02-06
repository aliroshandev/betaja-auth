import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {FaLock, FaUserTie} from "react-icons/fa";
import {Button, Form, notification, Space} from "antd";

import "./LoginPage.scss";
import LoginSVG from "./LoginSVG";
import {ACT_SetAccessToken, ACT_SetUserInfo, ACT_SignOut,} from "base/Redux/action-creators";
import {asyncHttpRequest} from "base/services/asyncHttpRequest";
import {useHttpRequest} from "base/hooks/useHttpRequest";

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {response, sendRequest, status} = useHttpRequest();

  useEffect(() => {
    dispatch(ACT_SignOut());
  }, [dispatch]);

  // set access_token & fetch userInfo
  useEffect(() => {
    if (status === "resolved" && response && Object.keys(response).length > 0) {
      notification.success({
        message: "ورود موفق",
        placement: "bottomLeft",
      });

      dispatch(ACT_SetAccessToken(response.access_token));

      asyncHttpRequest("get", "authenticate/user/info").then(response => {
        dispatch(ACT_SetUserInfo(response.data));
      });

      return history.push("dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const loginHandler = async values => {
    let username = values.username;
    let password = values.password;

    if (!username || !password) {
      notification.error({
        message: "خطا در ورود کاربر",
        description: "فیلد نام کاربری یا پسورد ناقص است",
        placement: "bottomLeft",
      });
    }

    sendRequest({
      method: "post",
      endpoint: "login",
      pagination: false,
      data: {username, password},
    });
  };

  return (
    <div className="login-container">
      <div className="wave">
        <LoginSVG/>
        <div className="divider"></div>
        <div className="image"></div>
      </div>
      <div className="login">
        <div className="title"> ورود به حساب کاربری</div>

        <Form
          initialvalues={{
            username: "",
            password: "",
          }}
          id="form-login"
          className="ui form"
          onFinish={loginHandler}
        >
          <div className="input-container">
            <label htmlFor="username-login" className="input-label">
              نام کاربری
            </label>
            <div className="input">
              <div className="icon">
                <FaUserTie/>
              </div>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "فیلد نام کاربری ناقص است!",
                  },
                ]}
              >
                <input id="username-login" type="text" name="username"></input>
              </Form.Item>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="username-password" className="input-label">
              کلمه ی عبور
            </label>
            <div className="input">
              <div className="icon">
                <FaLock/>
              </div>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "فیلد پسورد ناقص است!",
                  },
                ]}
              >
                <input
                  id="username-password"
                  type="password"
                  name="password"
                ></input>
              </Form.Item>
            </div>
          </div>
          <Space className="button">
            <Button id="login" color="teal" htmlType="submit">
              ورود
            </Button>

            {/* <Button
              className="forgetPassword"
              type="button"
              onClick={() => {
                setModalVisibility(!modlaVisiblity);
              }}
            >
              رمز عبور را فراموش کردم!
            </Button> */}
          </Space>
        </Form>
      </div>

      {/* {acceptTermsModalVisiblity ? (
        <AcceptTerm
          setAcceptTermsModlaVisiblity={async (value) => {
            await setAcceptTermsModalVisibility(value);
          }}
          visible={acceptTermsModalVisiblity}
          acceptTermStatus={userInfo.acceptTermStatus}
        />
      ) : null} */}
    </div>
  );
};

export default LoginPage;
