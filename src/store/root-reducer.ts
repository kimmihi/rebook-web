import { combineReducers } from "@reduxjs/toolkit";

import authReducers from "./slices/auth";

export const rootReducer = combineReducers({
  auth: authReducers,
});
