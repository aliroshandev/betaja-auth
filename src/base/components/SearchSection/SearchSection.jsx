import React from "react";
import { Button, Form, Row, Col } from "antd";

import RenderElement from "../RenderElement/RenderElement";
import "antd/dist/antd.css";
import "./SearchSection.scss";

const SearchSection = ({
  searchForm,
  submitForm,
  searchElements = [],
  sendRequestOnReset = true,
  setDontShowDataOnReset = (val) => val,
  resetBtnStatus,
}) => {
  if (!searchElements || searchElements.length === 0) {
    return null;
  }

  function trimTextsInForm() {
    let formValues = searchForm.getFieldsValue();
    searchElements.forEach((element) => {
      if (element.type.toLowerCase() === "text" && formValues[element.name]) {
        formValues[element.name] = formValues[element.name].trim();
      }
    });
    searchForm.setFieldsValue(formValues);
  }

  return (
    <Form
      className="form"
      layout="vertical"
      form={searchForm}
      name="roles"
      colon={true}
    >
      <Row gutter={25}>
        {searchElements.map((element) => {
          let { colSize = { xs: 24, sm: 12, lg: 5 } } = element;
          return (
            <Col
              key={`search-element-${element.name}`}
              xs={colSize.xs}
              sm={colSize.sm}
              lg={colSize.lg}
            >
              <RenderElement
                key={element.name}
                searchForm={searchForm}
                {...element}
              />
            </Col>
          );
        })}
        <Col xs={24} lg={4}>
          <Form.Item className="section-search-buttons">
            <Button
              type="primary"
              htmlType="submit"
              disabled={false}
              onClick={() => {
                trimTextsInForm();
                submitForm();
              }}
            >
              جستجو
            </Button>
            <Button
              disabled={resetBtnStatus}
              type="danger"
              onClick={() => {
                searchForm.resetFields();
                if (sendRequestOnReset) {
                  setDontShowDataOnReset(false);
                  submitForm();
                } else {
                  setDontShowDataOnReset(true);
                }
              }}
            >
              بازنشانی
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchSection;
