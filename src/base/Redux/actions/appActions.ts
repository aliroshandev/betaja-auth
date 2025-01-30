import { ActionTypes } from "../actionTypes";

export interface SetTheme {
  type: ActionTypes.SET_THEME;
  payload: boolean;
}
export interface SetBaseUrl {
  type: ActionTypes.SET_BASE_URL;
  payload: string;
}

export type AppAction = SetTheme | SetBaseUrl;
