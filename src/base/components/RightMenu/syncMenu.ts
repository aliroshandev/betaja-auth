import {MenuItemsType, SubmenuType,} from "./types/MenuItemsTypes";
import MENU_ITEMS from "./MenuItems";

function syncMenu(access: any) {
  function haveAccess(menu: MenuItemsType | SubmenuType) {
    // if (menu.accessBy) {
    // return menu.accessBy.includes(userActiveRole);
    // }
    if (!access?.data) {
      return true
    }

    if ("key" in menu) {
      for (let subaccess of access?.data) {
        for (let subroles of subaccess?.accessRoles) {
          console.log(menu?.key, subroles?.menuKey)
          if (subroles?.menuKey.includes(menu?.key)) {
            return true
          }
        }
      }
    }
    return false;
  }

  let authorizedMenu: MenuItemsType[] = [];

  authorizedMenu = MENU_ITEMS.filter((item: MenuItemsType | any) => {
    let authorizedSubMenu: Array<MenuItemsType> | any = [];
    if (item.submenus && item.submenus.length > 0) {
      authorizedSubMenu = item.submenus.filter((submenu: any) => {
        if (submenu.accessBy) {
          if (haveAccess(submenu)) {
            return true;
          }
          return false;
        } else return true;
      });
    }
    if (haveAccess(item)) {
      if (item.submenus) {
        item.submenus = authorizedSubMenu;
      }
      return true;
    }
    return false;
  });

  return authorizedMenu;
}

export default syncMenu;
