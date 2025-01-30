import { MenuItemsType } from "base/components/RightMenu/types/MenuItemsTypes";
import { ActionTypes } from "../../Redux/actionTypes";

export interface SetAccessToken {
  type: ActionTypes.SET_ACCESS_TOKEN;
  payload: string;
}
export interface SetRefreshToken {
  type: ActionTypes.SET_REFRESH_TOKEN;
  payload: string;
}

export interface UserInfo {
  id?: number;
  userName?: string;
  password?: string;
  degree?: string;
  firstName?: string;
  lastName?: string;
  mobile?: string;
  nationalCode?: number;
  pesonnelId?: number;
  avatar?: string;
  changedPwCount?: number;
  retryCount?: number;
  email?: string;
  roles?: Array<{
    id?: number;
    name?: string;
    title?: string;
  }>;
}

export interface SetUserInfo {
  type: ActionTypes.SET_USER_INFO;
  payload: UserInfo;
}

export interface UserApp {
  id: string;
  client: string;
  name: string;
  description: string;
  url: string;
  roles: Array<{
    id: number;
    description?: string | null;
    name: string;
  }>;
}

export interface SetUserApp {
  type: ActionTypes.SET_USER_APP;
  payload: Array<UserApp>;
}
export interface SetSelectedApp {
  type: ActionTypes.SET_SELECTED_APP;
  payload: UserApp;
}
export interface SetSelectedAppMenuItems {
  type: ActionTypes.SET_SELECTED_APP_MENU_ITEMS;
  payload: MenuItemsType[];
}

export interface SignOut {
  type: ActionTypes.SIGN_OUT;
}

export type UserAction =
  | SetAccessToken
  | SetRefreshToken
  | SetUserInfo
  | SignOut
  | SetUserApp
  | SetSelectedApp
  | SetSelectedAppMenuItems;
