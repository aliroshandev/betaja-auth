import ajaxRequest from "base/services/ajaxRequest";
import { store } from "base/Redux/configureStore";

/**
 * @param {String} method Method type. GET, POST, PATCH, DELETE, PUT
 * @param {String} endpoint API endpoint
 * @param {Object} query Request pagination
 * @param {Object} data Request body. For post and patch request
 * @param {Object} headers request header
 * @param {Boolean} pagination request has a pagination
 * @param {string} baseUrl base url for request
 */
export async function asyncHttpRequest({
  method = "get",
  endpoint,
  query,
  data = {},
  headers,
  pagination = false,
  baseUrl = store.getState().app.baseUrl,
    auth=true
}) {
  let requestHeader = {
    "Content-Type": "application/json",
    ...headers,
  };
    if(auth){
      requestHeader = {
        ...requestHeader,
        Authorization: `Bearer ${store.getState().user.accessToken}`
      }
    }

  const params = {
    ...(pagination && {
      page: query && query.page != null ? query.page : 1,
      size: query && query.size != null ? query.size : 15,
      sort: query && query.sort == null ? query.sort : "id",
    }),
    ...query,
  };

  const requestBody = {
    method: method,
    url: `${baseUrl}/${endpoint}`,
    headers: requestHeader,
    token: true,
    data,
    params,
    timeout: parseInt(process.env.REACT_APP_REQUEST_TIMEOUT),
  };

  return await ajaxRequest(requestBody);
}
