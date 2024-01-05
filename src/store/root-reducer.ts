import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducers from "./slices/auth";

const rootReducer = combineReducers({
  auth: authReducers,
});

export const persistedReducer = persistReducer(
  { key: "root", storage, whitelist: ["auth"] },
  rootReducer
);
