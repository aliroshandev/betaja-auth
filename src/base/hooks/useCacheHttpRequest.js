import { useEffect } from "react";
import { useHttpRequest } from "./useHttpRequest";
import { useLocalStorageState } from "./useLocalStorage";

function useCacheHttpRequest(entity) {
  const [value, setValue] = useLocalStorageState(entity);
  const { response, sendRequest, status, isFetching } = useHttpRequest(null);
  useEffect(() => {
    if (!value) {
      sendRequest({
        method: "get",
        endpoint: entity,
        pagination: false,
      });
    }
  }, [entity, sendRequest, value]);

  useEffect(() => {
    if (response && Object.keys(response).length > 0) {
      setValue(response.data);
    }
  }, [response, setValue]);

  return { value: value || (response && response.data), isFetching, status };

  // if (res.data && res.data.data) {
  //   setValue(res.data.data);
  // }
}

export default useCacheHttpRequest;
