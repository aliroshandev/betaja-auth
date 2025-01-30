import { useEffect, useMemo, useState } from "react";
import { Form, notification } from "antd";
import RenderElement from "base/components/RenderElement/RenderElement";
import { useGetApiCall } from "base/hooks/useGetApiCall";
import { asyncHttpRequest } from "base/services/asyncHttpRequest";
import { FormButtons } from "../Buttons/Buttons";
import "./CUMenu.scss";

const CUMenu = ({ onBack, clientId, selectedMenu }) => {
  const isCreate = !selectedMenu;
  const [menuForm] = Form.useForm();
  const [parentId, setParentId] = useState();
  const [isUpdating, setIsUpdating] = useState(false);
  useEffect(() => {
    if (selectedMenu) {
      let { key, title } = selectedMenu;
      menuForm.setFieldsValue({
        key,
        title,
      });
    }
  }, [menuForm, selectedMenu]);

  const { response: responseClient } = useGetApiCall({
    endpoint: "/api/clients?currentPage=1&pageSize=1000",
  });

  const { response: menus } = useGetApiCall({
    endpoint: `/api/menus/client-id/${clientId}`,
    enabled: !!clientId,
  });

  const ITEMS = useMemo(
    () => [
      {
        label: "عنوان",
        name: "title",
        type: "text",
      },
      {
        label: "کلید",
        name: "key",
        type: "text",
      },
      {
        label: "سامانه",
        name: "clientId",
        type: "text",
        isDisabled: true,
        placeholder:
          responseClient?.data?.find((client) => client.id === clientId)
            ?.description || "عمومی",
      },
      ...(clientId && menus?.data?.length > 0
        ? [
            {
              label: "منوی پدر",
              name: "parentId",
              type: "autocomplete",
              data: menus?.data,
              autoCompleteValue: "id",
              autoCompleteTitle: "title",
              handleChange(...rest) {
                setParentId(rest[1]?.key);
              },
              placeholder:
                menus?.data?.find((client) => client.id === selectedMenu?.id)
                  ?.parentName || "",
              disabled: menus?.data?.length > 0 ? false : true,
            },
          ]
        : []),
    ],
    [selectedMenu?.id, responseClient?.data, clientId, menus?.data]
  );

  async function onSubmit() {
    setIsUpdating(true);
    const temp = menuForm.getFieldsValue();

    asyncHttpRequest({
      method: isCreate ? "post" : "PUT",
      endpoint: "api/menus",
      data: {
        ...(!isCreate && selectedMenu),
        ...temp,
        parentId:
          parentId ??
          menus?.data?.find((client) => client.id === selectedMenu?.id)
            ?.parentId,
        clientId,
      },
    })
      .then(() => {
        notification.success({
          message: "عملیات با موفقیت انجام شد",
          placement: "bottomLeft",
        });
        setIsUpdating(false);
        onBack(true);
      })
      .catch(() => {
        notification.error({
          message: "خطا در انجام عملیات",
          placement: "bottomLeft",
        });
        setIsUpdating(false);
      });
  }

  return (
    <>
      <Form form={menuForm} onFinish={onSubmit} className="sh-menu-item">
        <div className="sh-countainer">
          {ITEMS.map((item) => (
            <RenderElement searchForm={menuForm} {...item} />
          ))}
        </div>
        <div className="sh-button">
          <FormButtons onBack={onBack} isUpdating={isUpdating} />
        </div>
      </Form>
    </>
  );
};

export default CUMenu;
