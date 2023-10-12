import { createSlice } from "@reduxjs/toolkit";

export const contactBoxSlice = createSlice({
  name: "contactBox",
  initialState: {
    showContactBox: false,
  },
  reducers: {
    setShowContactBox: (state, action) => {
      state.showContactBox = action.payload;
    },
  },
});

export const { setShowContactBox } = contactBoxSlice.actions;
export default contactBoxSlice.reducer;
