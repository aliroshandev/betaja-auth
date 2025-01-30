import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BiMoon, BiSun} from "react-icons/bi";
import {Link} from "react-router-dom";
import {Switch} from "antd";
import Icon, {MenuOutlined} from "@ant-design/icons";
import logo from "base/Assets/img/logo.png";
import {store} from "base/Redux/configureStore";
import {ACT_setTheme} from "base/Redux/action-creators";
import {AiOutlineLogout} from "react-icons/ai";
import "./TopMenu.scss";
import {FaUserAlt} from "react-icons/fa";

function TopMenu({toggleBurgerBtn}) {
  const dispatch = useDispatch();
  let user = useSelector((store) => store.user);
  const [darkTheme, setDarkTheme] = useState(store.getState().app.darkTheme);

  function setTheme() {
    setDarkTheme(!store.getState().app.darkTheme);
    dispatch(ACT_setTheme(!store.getState().app.darkTheme));
    const event = new CustomEvent("onUpdateTheme", {
      detail: store.getState().app.darkTheme,
    });
    document.dispatchEvent(event);
  }

  return (
    <header className="top-menu">
      <div className="menu-logo">
        <MenuOutlined
          onClick={toggleBurgerBtn}
          className={`burgerMenuIcon show `}
        />
        <Link to="/dashboard">
          <img src={logo} alt="logo"/>
        </Link>
        <Link to="/dashboard">{process.env.REACT_APP_TITLE}</Link>
      </div>

      <div className="spacer"></div>
      <div id="extraInfoTopMenu"></div>
      <div className="spacer"></div>

      <div className="left-section">
        <div className="info">
          <span className="avatarName">
            <div className="userName">
              <div className="icon">
                <Icon>
                  <FaUserAlt/>
                </Icon>
              </div>
              <div className="switch-theme">
                <Switch
                  className="switch"
                  checkedChildren={<BiMoon/>}
                  unCheckedChildren={<BiSun/>}
                  checked={darkTheme}
                  onChange={() => setTheme()}
                />
              </div>
              <div className="body">
                <div className="user">
                  <span>
                    <Icon>
                      <FaUserAlt/>
                    </Icon>
                    {user?.info?.userName}
                  </span>
                  <div className="activeRole">
                    {user.roles ? user.roles[0].title : "بدون نقش"}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="logout-btn"
              role="menuitem"
              onClick={() => {
                // keycloak.logout();
                // dispatch(ACT_SignOut());
                sessionStorage.clear();
                localStorage.clear();
                window.location = `${process.env.REACT_APP_LOGIN}/logout`;
              }}
            >
              <AiOutlineLogout size="22px"/>
              <button className="logout-text">خروج</button>
            </div>
          </span>
        </div>
      </div>
    </header>
  );
}

export default TopMenu;
