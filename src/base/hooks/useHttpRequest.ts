import {useCallback, useEffect, useReducer, useRef, useState} from "react";
import axios from "axios";
import {useErrorHandler} from "./useErrorHandler";
import {
  paramsType,
  ReducerActionType,
  requestType,
  responseErrorType,
  responseType,
  sendRequestInputType,
  stateReducerType,
} from "./types/useHttpRequestTypes";
import {store} from "../Redux/configureStore";

/**
 * @param {String} method Method type. GET, POST, PATCH, DELETE, PUT
 * @param {String} endpoint API endpoint
 * @param {Object} query Request pagination
 * @param {Object} data Request body. For post and patch request
 * @param {Object} headers request header
 * @param {Boolean} pagination request has a pagination
 * @param {String} string base url for requests
 */

const stateReducer = (state: stateReducerType, action: stateReducerType) => {
  switch (action.type) {
    case ReducerActionType.PENDING:
      return {
        status: ReducerActionType.PENDING.toLowerCase(),
        response: null,
        isFetching: true,
        error: null,
      };

    case ReducerActionType.RESOLVED:
      return {
        status: ReducerActionType.RESOLVED.toLowerCase(),
        response: action.response,
        isFetching: false,
        error: null,
      };

    case ReducerActionType.REJECTED:
      return {
        status: ReducerActionType.REJECTED.toLowerCase(),
        response: {},
        isFetching: false,
        error: action.error,
      };

    case ReducerActionType.UNMOUNT:
      return {
        status: "idle",
        response: {},
        isFetching: false,
        error: null,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const axiosInstance = axios.create({});

export function useHttpRequest() {
  // const [token, setToken] = useSessionStorageState("token");
  const [refetch, setRefetch] = useState(1);
  const {setNotification} = useErrorHandler();
  const [result, dispatchResult] = useReducer(stateReducer, {
    response: {},
    status: "idle",
    isFetching: false,
    error: null,
  });

  const refreshTokenHandler = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${store?.getState()?.user?.accessToken}`
    );
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    // urlencoded.append("client_id", "residence-ui");
    urlencoded.append("client_id", "applicant-ui");
    // urlencoded.append("client_secret", "ZrWUmP2RSCUBm5JvmSL4QLh5B5PqIm4b");
    if (store?.getState()?.user?.refreshToken) {
      // @ts-ignore
      urlencoded.append("refresh_token", store?.getState()?.user?.refreshToken);
    }
    urlencoded.append("grant_type", "refresh_token");

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "http://192.180.9.79:8085/auth/realms/mtna/protocol/openid-connect/token",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => localStorage.setItem("keycloak", result))
      .catch((error) => console.log("error", error));
  };

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        await refreshTokenHandler();
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${
          store.getState().user.accessToken
        }`;
        return axiosInstance(originalRequest);
      }
      return Promise.reject(error);
    }
  );

  const requestUnMount = useRef<boolean>(false);

  function refetchApi() {
    setRefetch((prev) => prev + 1);
  }

  useEffect(() => {
    if (requestUnMount.current) {
      dispatchResult({type: ReducerActionType.UNMOUNT});
      requestUnMount.current = false;
    }
  }, []);

  const sendRequest = useCallback(
    async ({
             method = "get",
             endpoint,
             query = null,
             data = null,
             headers = {},
             onSuccess: successFunction = (response: responseType) => {
             },
             onError: errorFunction = (err: responseErrorType) => {
             },
             pagination = false,
             baseUrl = store.getState().app.baseUrl,
             enabled = true,
           }: sendRequestInputType) => {
      if (!enabled) return null;
      const Authorization = `Bearer ${store.getState().user.accessToken}`;

      const requestHeader: {} = Authorization
        ? {
          Authorization,
          "Content-Type": "application/json",
          ...headers,
        }
        : {
          "Content-Type": "application/json",
        };

      const params: paramsType = {
        ...(pagination && {
          page: query && query.page != null ? query.page : 1,
          size: query && query.size != null ? query.size : 15,
          sort: query && query.sort == null ? query.sort : "id",
        }),
        ...query,
      };

      dispatchResult({type: ReducerActionType.PENDING});
      try {
        const requestBody: requestType = {
          method: method,
          url: `${baseUrl}${endpoint}`,
          headers: requestHeader,
          token: true,
          data: data,
          params,
          timeout: parseInt(process.env.REACT_APP_REQUEST_TIMEOUT as string),
        };
        const response: responseType = await axiosInstance(requestBody);
        successFunction(response);

        dispatchResult({
          type: ReducerActionType.RESOLVED,
          response: response.data,
        });

        if (response)
          setNotification(response.status, response.message as string);
      } catch (err) {
        const error = err as responseErrorType;
        let errorMsg = error.message;
        dispatchResult({
          type: ReducerActionType.REJECTED,
          error: errorMsg || "خطا در ارتباطات",
        });
        errorFunction(err);

        if (error?.response) {
          dispatchResult({
            type: ReducerActionType.REJECTED,
            error: error.response.message ? error.response.message : "",
          });

          setNotification(error.response.status, error.response.message);
        } else {
          // setNotification("failed", errorMsg || "خطا در ارتباطات");
          setNotification("failed", null);
        }
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [refetch]
  );

  const {response, status, error, isFetching}: stateReducerType = result;

  return {
    response,
    isFetching,
    sendRequest,
    status,
    error,
    requestUnMount,
    refetchApi,
  };
}
