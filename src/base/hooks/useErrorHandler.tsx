import {useHistory} from 'react-router-dom';
import {notification} from "antd";

export const useErrorHandler = () => {
  const history: any = useHistory();
  let status: null | number | string = null;
  let message: string | null;

  const setNotification = (stats: number | string, msg: string | null) => {
    if (stats) status = stats;
    if (msg) message = msg;

    if (!msg && stats) {
      switch (status) {
        case 200:
          message = null;
          break;

        case 204:
          message = "داده‌ای یافت نشد";
          break;

        case 400:
          message = "خطا در داده های ارسال شده";
          break;

        case 401:
          message = "مجوز دسترسی ندارید";
          break;

        case 403:
          // store.dispatch(ACT_SignOut());
          message = "زمان نشست شما به اتمام رسید";
          break;

        case 404:
          message = "خطا در دریافت اطلاعات";
          break;

        case 406:
          message = "این داده دارای اطلاعات می باشد";
          break;

        case 500:
          history.push("logout");
          message = "پاسخی از سمت سرور دریافت نشد";
          break;

        case "failed":
          message = "خطا در بر قراری ارتباط";
          break;

        default:
          message = "پیامی برای نمایش دریافت نشد";
          break;
      }
    }

    if (stats && message)
      notification.error({
        message,
        placement: "bottomLeft",
      });
    if (stats === 401 && message) {
      console.log("401111111")
      // @ts-ignore
      window.location = `${process.env.REACT_APP_LOGIN}/logout`;
    }
  };

  return {setNotification};
};
