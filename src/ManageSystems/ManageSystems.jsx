import {
  ACT_setBaseUrl,
  ACT_SetSelectedAppMenuItems,
} from "base/Redux/action-creators";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MANAGE_SYSTEM_MENU_ITEMS from "./ManageSystemsMenuItems";
import ManageSystemsRoutes from "./ManageSystemsRoutes";

const ManageSystems = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector((store) => store.user.selectedAppMenuItems);

  useEffect(() => {
    if (!menuItems) {
      dispatch(ACT_SetSelectedAppMenuItems(MANAGE_SYSTEM_MENU_ITEMS));
    }
  }, [dispatch, menuItems]);

  useEffect(() => {
    // dispatch(ACT_setBaseUrl("http://192.180.9.217:8085"));
    // dispatch(ACT_setBaseUrl("http://192.168.1.182:8000"));
    dispatch(ACT_setBaseUrl("http://46.34.180.212:8000"));
  }, [dispatch]);
  return <ManageSystemsRoutes />;
};

export default ManageSystems;
