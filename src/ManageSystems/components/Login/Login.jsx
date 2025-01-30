import React, {useEffect, useMemo, useState} from "react";
import RenderElement from "../../../base/components/RenderElement/RenderElement";
import {SubmitBtn} from "../Buttons/Buttons";
import {Form, notification} from "antd";
import {asyncHttpRequest} from "../../../base/services/asyncHttpRequest";
import {useHistory} from "react-router-dom";
import {ACT_SetAccessToken, ACT_SetRefreshToken} from "../../../base/Redux/action-creators";
import {useDispatch} from "react-redux";
import useSessionStorageState from "../../../base/hooks/useSessionStorage";


/*async function authGet(queryKey) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "*!/!*");
  myHeaders.append("Accept-Language", "fa");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    withCredentials: true,
    // credentials: 'include',
    // body: urlencoded,
    body: null,
  };

  return (
    fetch(`http://46.34.180.212:8000${queryKey}`, requestOptions)
      // .then((response) => response.text())
      .then((response) => response.blob())
      .then((blob) => URL.createObjectURL(blob))
      .catch((error) => console.log("error", error))
  );
}*/

const LoginPage = () => {
  const [isLoggedIn,] = useState(false);
  const [menuForm] = Form.useForm();
  const history = useHistory();
  const [, setIsUpdating] = useState(false);
  const dispatch = useDispatch();
  const [, setToken] = useSessionStorageState("token");
  const [, setRefreshToken] = useSessionStorageState("refreshToken");

  const saveTokenHandler = async (data) => {
    try {
      setToken(data.access_token);
      setRefreshToken(data.refresh_token);

      dispatch(ACT_SetAccessToken(data.access_token));
      dispatch(ACT_SetRefreshToken(data.refresh_token));
    } catch (err) {
      console.log(err);
    } finally {
      await history.push("/dashboard");
      window.location = `${process.env.REACT_APP_LOGIN}/dashboard`;
    }
  };

  // const [captcha, setCaptcha] = useState("");
  //
  // useEffect(() => {
  //     authGet("/api/captcha/get-captcha").then((res) => setCaptcha(res));
  // }, []);

  useEffect(() => {

    if (isLoggedIn) {
      history.push('/dashboard');
    }

  }, [isLoggedIn,])

  async function onSubmit(data) {
    let temp = {};
    for (let [key, value] of Object.entries(data)) {
      if (value) {
        temp[key] = value;
      }
    }
    setIsUpdating(true);

    asyncHttpRequest({
      method: "POST",
      endpoint: "api/auth/login",
      data: {
        ...temp,
        client_id: "authorization-srv",
        client_secret: "SZ6xqVKq1FEvBO9I9o0KxcB99kSVEO2T",
      },
      auth: false,
    })
      .then(async (res) => {
        setIsUpdating(false);
        notification.success({
          message: "عملیات با موفقیت انجام شد",
          placement: "bottomLeft",
        });
        if (res.data?.data?.access_token) {
          let {access_token,} = res.data.data;
          // setToken(access_token);
          // setRefreshToken(refresh_token);
          // dispatch(ACT_SetAccessToken(access_token));
          // dispatch(ACT_SetRefreshToken(refresh_token));
          console.log(access_token)
          saveTokenHandler(res.data.data)
        }
      })
      .catch((rej) => {
        notification.error({
          message: "خطا در انجام عملیات",
          placement: "bottomLeft",
        });
        setIsUpdating(false);
      });
  }


  const ITEMS = useMemo(
    () => [
      {
        label: "نام کاربری",
        name: "username",
        type: "text",
        size: 8,
        rules: [
          {
            required: true,
            message: "وارد کردن رمز عبور الزامی میباشد",
          },
        ],
      },
      {
        name: "password",
        label: "رمز عبور",
        type: "password",
        size: 8,
        hasFeedback: true,
        rules: [
          {
            required: true,
            message: "وارد کردن رمز عبور الزامی میباشد",
          },
        ],
      },
      // {
      //     label: "کد",
      //     name: "captcha",
      //     type: "text",
      //     rules: [
      //         {
      //             required: true,
      //             message: "وارد کردن رمز عبور الزامی میباشد",
      //         },
      //     ],
      // },

    ],
    []
  );

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundImage: "url('/assets/images/bg-1.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{width: '50%', padding: "50px", border: "solid 1px lightgrey"}}>
        <Form form={menuForm} onFinish={onSubmit} className="sh-menu-item">
          <div className="sh-countainer">
            {ITEMS.map((item) => (
              <RenderElement key={`${item.type}_${item.name}`} searchForm={menuForm} {...item} />
            ))}
          </div>
          <div className="sh-button">
            <SubmitBtn
              submitText={"ورود"}
              isUpdating={false}
              disabled={false}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;

// async function loginRequest({username, password}) {
async function loginRequest({username, password, captcha}) {
  var myHeaders = new Headers();
  // myHeaders.append("Authorization", "Bearer");
  // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json, text/plain, */*");
  myHeaders.append("Accept-Language", "fa");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    withCredentials: true,
    credentials: "include",
    body: JSON.stringify({
      username: username ?? "",
      password: password ?? "",
      captcha: captcha ?? "",
    }),
    redirect: "follow",
  };

  return fetch("http://localhost:8000/api/auth/login-send-massage", requestOptions)
    // .then((response) => response.text())
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      // debugger;
      try {
        if (result && JSON.parse(result)) {
          return JSON.parse(result);
        }
      } catch (err) {
        throw {name: "", message: "Error in login", cause: "api Call", stack: ""};
      }
      return JSON.parse(result);
    })
    .catch((error) => console.log("error", error));
}
