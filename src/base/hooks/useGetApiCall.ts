import {useEffect} from "react";
import {useHttpRequest} from "./useHttpRequest";
import {store} from "base/Redux/configureStore";
import {responseErrorType, responseType} from "./types/useHttpRequestTypes";

/**
 * @param {String} baseUrl base Url
 * @param {String} endpoint API endpoint
 * @param {Boolean} pagination request has a pagination
 * @param {Object} headers request header
 * @param {Object} refetchVariables dependency list in useEffect for refetching
 */

interface useGetApiCallInput {
  endpoint: string;
  pagination?: boolean;
  headers?: any;
  refetchVariables?: any;
  baseUrl: string | undefined;
  onSuccess?: any;
  onError?: any;
  enabled?: boolean;
}

export function useGetApiCall({
                                endpoint,
                                pagination = false,
                                headers,
                                refetchVariables,
                                baseUrl = store.getState().app.baseUrl,
                                onSuccess = (response: responseType) => {
                                },
                                onError = (err: responseErrorType) => {
                                },
                                enabled = true,
                              }: useGetApiCallInput) {
  const {response, sendRequest, status, refetchApi, isFetching, error} =
    useHttpRequest();

  useEffect(() => {
    if (!endpoint) {
      console.warn("import end point");
    } else {
      sendRequest({
        baseUrl,
        method: "get",
        endpoint,
        pagination,
        onSuccess,
        onError,
        enabled,
      });
    }
  }, [endpoint, sendRequest, refetchVariables, pagination, baseUrl, enabled, onSuccess, onError]);

  return {response, status, refetchApi, isFetching, error};
}
