import { combineReducers } from "@reduxjs/toolkit";
import drawerSlice from "./features/drawer/drawerSlice";
import anchorSlice from "./features/anchorEl/anchorSlice";

const rootReducer = combineReducers({
  drawer: drawerSlice,
  anchorEl: anchorSlice,
});

export default rootReducer;
