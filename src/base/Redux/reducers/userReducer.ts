import {ActionTypes} from "../actionTypes";
import {UserAction, UserApp, UserInfo} from "../actions";
import {MenuItemsType} from "base/components/RightMenu/types/MenuItemsTypes";

interface UserState {
  accessToken: string | null;
  refreshToken: string | null;
  info: UserInfo | {};
  accessibleApps: Array<UserApp> | null;
  selectedApp: UserApp | null;
  selectedAppMenuItems: MenuItemsType[] | null;
}

const initialState = {
  accessToken: null,
  refreshToken: null,
  info: {},
  accessibleApps: null,
  selectedApp: null,
  selectedAppMenuItems: null,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case ActionTypes.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case ActionTypes.SET_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.payload,
      };
    case ActionTypes.SET_USER_INFO:
      return {
        ...state,
        info: {...action.payload},
      };
    case ActionTypes.SET_USER_APP:
      return {
        ...state,
        accessibleApps: action.payload,
      };
    case ActionTypes.SET_SELECTED_APP:
      return {
        ...state,
        selectedApp: action.payload,
      };
    case ActionTypes.SET_SELECTED_APP_MENU_ITEMS:
      return {
        ...state,
        selectedAppMenuItems: action.payload,
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
