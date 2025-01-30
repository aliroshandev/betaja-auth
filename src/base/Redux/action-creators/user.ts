import { ActionTypes } from "../../Redux/actionTypes";
import {
  SetAccessToken,
  SetRefreshToken,
  SetUserInfo,
  SignOut,
  SetUserApp,
  SetSelectedApp,
  UserApp,
  SetSelectedAppMenuItems,
} from "../../Redux/actions";
import { MenuItemsType } from "base/components/RightMenu/types/MenuItemsTypes";

export const ACT_SetAccessToken = (payload: any): SetAccessToken => ({
  type: ActionTypes.SET_ACCESS_TOKEN,
  payload,
});

export const ACT_SetRefreshToken = (payload: any): SetRefreshToken => ({
  type: ActionTypes.SET_REFRESH_TOKEN,
  payload,
});

export const ACT_SetUserInfo = (payload: any): SetUserInfo => ({
  type: ActionTypes.SET_USER_INFO,
  payload,
});

export const ACT_SetUserApp = (payload: any): SetUserApp => ({
  type: ActionTypes.SET_USER_APP,
  payload,
});

export const ACT_SetSelectedApp = (payload: UserApp): SetSelectedApp => ({
  type: ActionTypes.SET_SELECTED_APP,
  payload,
});
export const ACT_SetSelectedAppMenuItems = (
  payload: MenuItemsType[]
): SetSelectedAppMenuItems => ({
  type: ActionTypes.SET_SELECTED_APP_MENU_ITEMS,
  payload,
});

export const ACT_SignOut = (): SignOut => ({
  type: ActionTypes.SIGN_OUT,
});
