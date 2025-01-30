import React, { useState } from "react";
// import {useSelector} from "react-redux"
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Menu } from "antd";
import Icon, { PoweroffOutlined, UserOutlined } from "@ant-design/icons";

import { FaUserAlt } from "react-icons/fa";
import "./style.scss";
// import { config } from "API/index";

// get user info from redux store and set profile img src base on it
const LeftAvatar = () => {
  // const user = useSelector((store) => store.user);
  const [
    profileImg,
    // , setProfileImg
  ] = useState(null);

  // useEffect(() => {
  //   setProfileImg(
  //     `${config.controllerURL}/l4/users/${
  //       user.id
  //     }/avatar?${new Date().getTime()}`
  //   );
  //   //TODO: check if get time is necessary
  // }, [user]);

  const menu = (
    <Menu className="avatarDropDown">
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link to="/profile">
          <span>پروفایل</span>
        </Link>
      </Menu.Item>
      <Menu.Item
        className={"logout"}
        key="sign-out"
        icon={<PoweroffOutlined />}
      >
        <Link to="logout">
          <span>خروج</span>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div id="leftAvatar">
      <Dropdown
        overlay={menu}
        trigger={["hover"]}
        placement="bottomCenter"
        overlayClassName="overlayAvatar"
      >
        {profileImg ? (
          <Avatar size={36} src={profileImg} style={{ cursor: "pointer" }} />
        ) : (
          <Icon>
            <FaUserAlt />
          </Icon>
        )}
      </Dropdown>
    </div>
  );
};

export default LeftAvatar;
