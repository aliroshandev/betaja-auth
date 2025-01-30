import { ActionTypes } from "../actionTypes";
import { AppAction } from "../actions";

interface dashboardState {
  darkTheme: Boolean;
  baseUrl: string | undefined;
}

const initialState = {
  darkTheme: false,
  baseUrl: process.env.REACT_APP_BASE_URL,
};

export const appReducer = (
  state: dashboardState = initialState,
  action: AppAction,
) => {
  switch (action.type) {
    case ActionTypes.SET_THEME:
      return {
        ...state,
        darkTheme: action.payload,
      };
    case ActionTypes.SET_BASE_URL:
      return {
        ...state,
        baseUrl: action.payload,
      };

    default:
      return state;
  }
};
