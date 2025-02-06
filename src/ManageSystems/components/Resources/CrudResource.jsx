import {Col, Form, notification, Row} from "antd";
import {useMemo, useState} from "react";
import {useForm} from "antd/es/form/Form";
import RenderElement from "base/components/RenderElement/RenderElement";
import {useGetApiCall} from "base/hooks/useGetApiCall";
import {asyncHttpRequest} from "base/services/asyncHttpRequest";
import {FormButtons} from "../Buttons/Buttons";

const CrudResource = ({
                        onBack,
                        refetch,
                        menuId,
                        selectedResource,
                        isCreate,
                      }) => {
  const [nameForm] = useForm();
  const [isUpdating, setIsUpdating] = useState(false);
  const [parentId,] = useState();

  const {response: menu} = useGetApiCall({
    endpoint: `/menus/id/${menuId}`,
  });
  // const {response: resources, status: resourceStatus} = useGetApiCall({
  //   endpoint: "/resources?currentPage=1&pageSize=20",
  // });

  const ITEMS = useMemo(
    () => [
      {
        name: "title",
        label: "عنوان",
        type: "text",
        size: 8,
        defaultValue: selectedResource?.title,
      },
      {
        name: "key",
        label: "کلید",
        type: "text",
        size: 8,
        defaultValue: selectedResource?.key,
      },
      {
        name: "menuId",
        label: "منو",
        type: "text",
        isDisabled: true,
        placeholder: menu?.data?.title || "",
        size: 8,
        defaultValue: selectedResource?.menuName,
      },
      {
        name: "url",
        label: "آدرس",
        type: "text",
        size: 12,
        defaultValue: selectedResource?.url,
      },
    ],
    [
      selectedResource?.title,
      selectedResource?.url,
      menu?.data?.title,
      selectedResource?.key,
      selectedResource?.menuName,
    ]
  );

  async function onNewSource(data) {
    let temp = {};
    for (let [key, value] of Object.entries(data)) {
      if (value) {
        temp[key] = value;
      }
    }
    setIsUpdating(true);
    asyncHttpRequest({
      method: isCreate ? "POST" : "PUT",
      endpoint: "resources",
      data: {
        ...(!isCreate && selectedResource),

        ...temp,
        menuId,
        parentId,
      },
    })
      .then((res) => {
        notification.success({
          message: "عملیات با موفقیت انجام شد",
          placement: "bottomLeft",
        });
        refetch();
        setIsUpdating(false);
        onBack();
      })
      .catch((rej) => {
        notification.error({
          message: "خطا در انجام عملیات",
          placement: "bottomLeft",
        });
        setIsUpdating(false);
      });
  }

  return (
    <Form onFinish={onNewSource}>
      <Row gutter={[16]}>
        {ITEMS.map((item) => (
          <Col key={item.name} span={item.size}>
            <RenderElement searchForm={nameForm} {...item} />
          </Col>
        ))}
      </Row>
      <FormButtons onBack={onBack} isUpdating={isUpdating}/>
    </Form>
  );
};

export default CrudResource;
