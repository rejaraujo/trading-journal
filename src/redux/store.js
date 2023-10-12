"use client";

import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./features/drawer/drawerSlice";
import anchorElReducer from "./features/anchorEl/anchorSlice";
import contactBoxReducer from "./features/contactBox/contactBoxSlice";

export const store = configureStore({
  reducer: {
    drawerOpen: drawerReducer,
    anchorEl: anchorElReducer,
    showContactBox: contactBoxReducer,
  },
});

/* no using the combineReducers approach */
/*  export default configureStore({
reducer: {},
  middleware: (curryGetDefaultMiddleware) => curryGetDefaultMiddleware().concat(sliceApi.middleware)
 }); */
