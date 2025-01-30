import { ActionTypes } from "../actionTypes";
import { SetBaseUrl, SetTheme } from "../actions";

export const ACT_setTheme = (themeValue: any): SetTheme => ({
  type: ActionTypes.SET_THEME,
  payload: themeValue,
});

export const ACT_setBaseUrl = (baseUrl: string): SetBaseUrl => ({
  type: ActionTypes.SET_BASE_URL,
  payload: baseUrl,
});
