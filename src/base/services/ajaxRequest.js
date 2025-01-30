import axios from "axios";

import { store } from "base/Redux/configureStore";
import { ACT_SignOut } from "base/Redux/action-creators";

export default function ajaxRequest(request) {
  return new Promise((resolve, reject) => {
    axios(request)
      .then((res) => {
        resolve(res);
      })
      .catch(async (err) => {
        if (err.response && err.response.status === 403) {
          store.dispatch(ACT_SignOut());

          if (err.response.data) {
            err.response.message = "زمان نشست شما به اتمام رسیده است.";
          }

          reject({
            message: err.response.data.msg || err.response.message,
            status: err.response.status,
          });
        } else if (err.response && err.response.status === 401) {
          if (err.response.data) {
            err.response.message = "رمز عبور وارد شده اشتباه است";
          }

          reject({
            message: err.response.data.msg || err.response.message,
            status: err.response.status,
          });
        } else if (err.response && err.response.status === 406) {
          if (err.response.data) {
            err.response.message = "این داده دارای اطلاعات می باشد";
          }

          reject({
            message: err.response.data.msg || err.response.message,
            status: err.response.status,
          });
        } else if (err.response && err.response.status === 500) {
          if (err.response.data) {
            err.response.message = "پاسخی از سمت سرور دریافت نشد";
          }

          reject({
            message: err.response.data.msg || err.response.message,
            status: err.response.status,
          });
        } else if (!err.response) {
          reject({
            message: "خطا در برقراری ارتباط",
          });
        }
      });
  });
}
