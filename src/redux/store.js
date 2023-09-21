"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import drawerSlice from "../redux/features/drawer/drawerSlice";

const rootReducer = combineReducers({
  drawer: drawerSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

/* no using the combineReducers approach */
/*  export default configureStore({
reducer: {},
  middleware: (curryGetDefaultMiddleware) => curryGetDefaultMiddleware().concat(sliceApi.middleware)
 }); */
