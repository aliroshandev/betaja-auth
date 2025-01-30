import { Button, InputNumber } from "antd";
import React from "react";

import "./NumberInput.scss";

export const NumberInput = ({ foodId, values, setValues, food, disabled }) => {
  function handleClickButton(operation) {
    const operations = {
      inc: (a, b) => a + b,
      dec: (a, b) => {
        if (a - b < 0) return 0;
        return a - b;
      },
    };
    let temp = { ...values };
    temp[foodId] = operations[operation](
      temp[foodId] !== undefined ? temp[foodId] : food.reserved,
      1,
    );
    setValues(temp);
  }

  return (
    <div className="num-input">
      <Button
        className="plus-btn"
        type="primary"
        ghost
        size="small"
        onClick={() => handleClickButton("inc")}
        disabled={disabled}
      >
        +
      </Button>
      <InputNumber
        min={0}
        onChange={e => {
          let temp;
          if (values[foodId]) {
            temp = { ...values };
            temp[foodId] = e;
          } else {
            temp = {
              ...values,
              [foodId]: e,
            };
          }
          setValues(temp);
        }}
        value={
          values[foodId] !== undefined
            ? values[foodId]
            : food.reserved
            ? food.reserved
            : 0
        }
        size="small"
        disabled={disabled}
      />
      <Button
        className="minus-btn"
        type="primary"
        danger
        size="small"
        onClick={() => handleClickButton("dec")}
        disabled={disabled}
        //   !food.reserved[objectKey] &&
        //   (disabled ||
        //     !values[foodId] ||
        //     values[foodId][objectKey] === 0 ||
        //     !values[foodId][objectKey])
        // }
      >
        -
      </Button>
    </div>
  );
};
