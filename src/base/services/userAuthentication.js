import axios from "axios";
import { store } from "base/Redux/configureStore";

function userAuthentication(password) {
  return new Promise((resolve, reject) => {
    const request = {
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/l4/users/authenticate`,
      headers: {
        Authorization: `Bearer ${store.getState().user.accessToken}`,
        "Content-Type": "application/json",
      },
      token: true,
      data: JSON.stringify({ password }),
      timeout: Number(process.env.REACT_APP_REQUEST_TIMEOUT),
    };

    axios(request)
      .then(res => resolve(res))
      .catch(e => reject(e));
  });
}

export default userAuthentication;
