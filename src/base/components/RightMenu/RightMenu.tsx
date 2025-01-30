import React, {useEffect} from "react";
import {Menu} from "antd";
import {NavLink} from "react-router-dom";
import {RouteComponentProps, withRouter} from "react-router";

import {MenuItemsType} from "./types/MenuItemsTypes";
import {store} from "../../Redux/configureStore";
import MENU_ITEMS from "./MenuItems";
// import syncMenu from "./syncMenu";
import "./RightMenu.scss";
import {GrAppsRounded} from "react-icons/gr";
import syncMenu from "./syncMenu";
import {useGetApiCall} from "../../hooks/useGetApiCall";

interface RightMenuProps extends RouteComponentProps<any> {
  location: any;
  isMenuCollapsed: boolean;
  items: MenuItemsType[];
}

interface ActiveMenuType {
  submenu?: string | undefined;
  menu: string | MenuItemsType | undefined;
}

const RightMenu = ({location, isMenuCollapsed}: RightMenuProps) => {
  const pathname = location.pathname.substr(1);
  const {SubMenu}: { SubMenu: any } = Menu;
  //TODO: set store type and use it instead of any
  // const userActiveRole = useSelector((store: any) => store.user.info.roles) || [
  //   {},
  // ];
  // const AUTHORIZED_MENU: MenuItemsType[] = syncMenu(userActiveRole[0].name);
  const [AUTHORIZED_MENU, setAUTHORIZED_MENU] = React.useState<MenuItemsType[]>([]);

  const {
    response: roleData,
    status,
  } = useGetApiCall({
    baseUrl: store.getState().app.baseUrl,
    enabled: true,
    headers: undefined,
    onError: undefined,
    onSuccess: undefined,
    pagination: false,
    refetchVariables: undefined,
    endpoint: "/api/access/access-user-login"
  });

  useEffect(() => {
    // console.log(roleData)
    setAUTHORIZED_MENU(syncMenu(roleData));
  }, [status, roleData])

  //TODO: fix error on get icons from right menu items

  function getActiveMenu(): ActiveMenuType {
    let result: ActiveMenuType = {menu: "dashboard"};
    MENU_ITEMS.find((menu: MenuItemsType) => {
      if (pathname.includes("/")) {
        let [submenu]: Array<string> = pathname.split("/");
        result = {submenu, menu: pathname};
        return true;
      } else if (menu.link === pathname) {
        result = {menu: menu.link};
        return true;
      } else if (menu.submenus) {
        let indexOfSubmenu;
        let findInSubmenus = menu.submenus.find((submenu, index) => {
          indexOfSubmenu = index;
          if (submenu.link)
            return submenu.link.toLowerCase() === pathname.toLowerCase();
          else return false;
        });
        if (findInSubmenus) {
          let generatedKey = `${menu.comp}-menu-item_${indexOfSubmenu}`;
          result = {submenu: menu.comp, menu: generatedKey};
          return true;
        }
      }
      return false;
    });
    return result;
  }

  if (!MENU_ITEMS) {
    return <div></div>;
  }

  return (
    <>
      <Menu
        mode="inline"
        className="root-menu"
        defaultSelectedKeys={[getActiveMenu().menu, pathname]}
        defaultOpenKeys={[getActiveMenu().submenu!]}
        inlineCollapsed={isMenuCollapsed}
        theme={store.getState().app.darkTheme ? "dark" : "light"}
      >
        {AUTHORIZED_MENU.map((menu) => {
          if (menu.submenus) {
            return (
              <SubMenu
                key={menu.comp}
                // icon={menu.icon}
                icon={<GrAppsRounded/>}
                title={menu.name}
                className={`${!store.getState().app.darkTheme && "light-bg"} ${
                  isMenuCollapsed ? "submenu-collapsed" : "custom-submenu-item "
                } custom-submenu-in-collapsed`}
              >
                {menu.submenus.map((submenu) => {
                  if (submenu.submenus) {
                    return (
                      <SubMenu
                        key={submenu.comp ? submenu.comp : submenu.link}
                        // icon={submenu.icon}

                        icon={<GrAppsRounded/>}
                        title={submenu.name}
                        className={`${
                          !store.getState().app.darkTheme && "light-bg"
                        } ${
                          isMenuCollapsed
                            ? "submenu-collapsed"
                            : "custom-submenu-item "
                        } custom-submenu-in-collapsed`}
                      >
                        {submenu.submenus.map((child) => (
                          <Menu.Item
                            key={child.link}
                            className="custom-menu-item"
                            style={child.style}
                          >
                            <NavLink style={child.style} to={"/" + child.link}>
                              {/* {child.icon ? (
                                child.icon
                              ) : (
                                <GrAppsRounded style={{ fontSize: "10px" }} />
                              )} */}

                              {<GrAppsRounded/>}
                              {child.name}
                            </NavLink>
                          </Menu.Item>
                        ))}
                      </SubMenu>
                    );
                  }
                  return (
                    <Menu.Item
                      key={submenu.link}
                      className="custom-menu-item"
                      style={submenu.style}
                      // icon={submenu.icon}
                      icon={<GrAppsRounded/>}
                    >
                      <NavLink style={submenu.style} to={"/" + submenu.link}>
                        {submenu.name}
                      </NavLink>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          }
          return (
            <Menu.Item
              key={menu.link}
              // icon={menu.icon}
              icon={<GrAppsRounded/>}
              className="custom-menu-item"
              style={menu.style}
            >
              <NavLink style={menu.style} to={"/" + menu.link}>
                {menu.name}
              </NavLink>
            </Menu.Item>
          );
        })}
      </Menu>
    </>
  );
};

export default withRouter(RightMenu);
