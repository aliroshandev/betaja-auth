import React from "react";
import ReactDOM from "react-dom";

const ExtraInfo = ({ children }) => {
  const extraInfoElement = document.getElementById("extraInfoTopMenu");
  if (!extraInfoElement) {
    return null;
  }
  return ReactDOM.createPortal(<>{children}</>, extraInfoElement);
};

export default ExtraInfo;
