import { combineReducers } from "redux";

import { userReducer, appReducer } from "./index";

const reducer = combineReducers({
  user: userReducer,
  app: appReducer,
});

export default reducer;
