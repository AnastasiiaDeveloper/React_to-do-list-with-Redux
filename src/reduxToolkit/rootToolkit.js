import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import reducer from "./toolkitReducer";
const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});
const rootReducer = combineReducers({
  toolkit: reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
});
export default store;
