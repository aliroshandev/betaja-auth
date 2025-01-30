import React from "react";

// import CheckSensitiveAccess from "HOCs/CheckSensitiveAccess";
import "./MainContainer.scss";

export const MainContainer = props => {
  return (
    <div className="main-container">
      {/* <CheckSensitiveAccess> */}
      {props.children}
      {/* </CheckSensitiveAccess> */}
    </div>
  );
};

export default MainContainer;
