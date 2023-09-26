import { combineReducers } from "@reduxjs/toolkit";
import drawerSlice from "./features/drawer/drawerSlice";

const rootReducer = combineReducers({
  drawer: drawerSlice,
});

export default rootReducer;
