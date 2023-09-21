import { combineReducers } from "@reduxjs/toolkit";
import drawerSlice from "../redux/features/drawer/drawerSlice";

const rootReducer = combineReducers({
  drawer: drawerSlice,
});

export default rootReducer;
