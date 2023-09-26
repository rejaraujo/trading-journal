"use client";

import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./features/drawer/drawerSlice";

export const store = configureStore({
  reducer: {
    drawerOpen: drawerReducer,
  },
});

/* no using the combineReducers approach */
/*  export default configureStore({
reducer: {},
  middleware: (curryGetDefaultMiddleware) => curryGetDefaultMiddleware().concat(sliceApi.middleware)
 }); */
