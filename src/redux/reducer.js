import { combineReducers } from "@reduxjs/toolkit";
import drawerSlice from "./features/drawer/drawerSlice";
import anchorSlice from "./features/anchorEl/anchorSlice";
import contactBoxSlice from "./features/contactBox/contactBoxSlice";

const rootReducer = combineReducers({
  drawer: drawerSlice,
  anchorEl: anchorSlice,
  contactBoxSlice: contactBoxSlice,
});

export default rootReducer;
