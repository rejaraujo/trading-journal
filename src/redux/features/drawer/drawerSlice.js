import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    drawerOpen: false,
  },
  reducers: {
    setDrawerOpen: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setDrawerOpen } = drawerSlice.actions;
export default drawerSlice.reducer;
