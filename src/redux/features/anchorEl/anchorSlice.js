import { createSlice } from "@reduxjs/toolkit";

export const anchorElSlice = createSlice({
  name: "anchorEl",
  initialState: {
    anchorEl: null,
  },
  reducers: {
    setAnchorEl: (state, action) => {
      state.anchorEl = action.payload;
    },
  },
});

export const { setAnchorEl } = anchorElSlice.actions;
export default anchorElSlice.reducer;
