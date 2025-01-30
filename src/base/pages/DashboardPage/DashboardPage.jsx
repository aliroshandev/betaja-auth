import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./DashboardPage.scss";
import {
  ACT_setBaseUrl,
  ACT_SetSelectedApp,
  ACT_SetSelectedAppMenuItems,
} from "base/Redux/action-creators";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { accessibleApps } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(ACT_SetSelectedApp(null));
    dispatch(ACT_SetSelectedAppMenuItems(null));
    dispatch(ACT_setBaseUrl(process.env.REACT_APP_BASE_URL));
  }, [dispatch]);

  return (
    <div id="dashboard">
      {accessibleApps?.map((app) => {
        if (app.name && app.description) {
          return (
            <NavLink
              className="menu-items"
              key={app.name}
              to={app.name}
              onClick={() => dispatch(ACT_SetSelectedApp(app))}
            >
              {app.description}
            </NavLink>
          );
        }
        return null;
      })}
    </div>
  );
};

export default DashboardPage;
