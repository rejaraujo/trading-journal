"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import the slices.

const rootReducer = combineReducers({
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});

/* no using the combineReducers approach */
/*  export default configureStore({
reducer: {},
  middleware: (curryGetDefaultMiddleware) => curryGetDefaultMiddleware().concat(sliceApi.middleware)
 }); */
