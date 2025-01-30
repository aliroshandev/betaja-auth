import React, { useEffect } from "react";
import { AutoComplete, Skeleton } from "antd";
import "./CustomAutocomplete.scss";
import { useHttpRequest } from "base/hooks/useHttpRequest";

const CustomAutocomplete = ({
  placeholder = "جستجو",
  objectKey,
  objectValue,
  objectTitle,
  onSelect,
  canFetchData = true,
  dataUrl,
  value,
  additionalLabel,
}) => {
  const { response, sendRequest, status } = useHttpRequest();
  useEffect(() => {
    if (canFetchData) {
      sendRequest({
        method: "get",
        endpoint: dataUrl,
        pagination: false,
        headers: {},
      });
    }
  }, [dataUrl, sendRequest, canFetchData]);

  return (
    <>
      {status === "pending" ? (
        <Skeleton.Input active size="large" />
      ) : !canFetchData ? (
        <input
          className="CustomAutocomplete"
          type="text"
          disabled
          placeholder={placeholder}
        ></input>
      ) : status === "resolved" && response && response.data ? (
        <AutoComplete
          className="CustomAutocomplete"
          onSelect={(value, item) => {
            onSelect(item);
          }}
          filterOption={(inputValue, option) =>
            option.children.includes(inputValue)
          }
          placeholder={placeholder}
          value={value && value[objectValue]}
        >
          {response.data.map(item => {
            return (
              <AutoComplete.Option
                key={item[objectKey]}
                value={item[objectValue]}
              >
                {`${item[objectTitle]}${additionalLabel ? additionalLabel(item) : ""
                  }`}
              </AutoComplete.Option>
            );
          })}
        </AutoComplete>
      ) : status === "rejected" ? (
        <span>خطا در دریافت اطلاعات</span>
      ) : (
        <input
          className="CustomAutocomplete"
          type="text"
          disabled
          placeholder={placeholder}
        ></input>
      )}
    </>
  );
};

export default CustomAutocomplete;
