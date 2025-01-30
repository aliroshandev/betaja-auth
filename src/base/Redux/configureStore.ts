import {compose, Reducer} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react
import reducer from "./reducers/rootReducer";
import {configureStore} from '@reduxjs/toolkit';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistConfig = {
  key: "betaja_authorization",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer as Reducer);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   persistedReducer,
//   {},
//   composeEnhancers(applyMiddleware(thunk)),
// );
const store = configureStore({
  reducer: persistedReducer,
})

const persistor = persistStore(store);

export {store, persistor};
