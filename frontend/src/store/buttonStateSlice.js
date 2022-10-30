import { createSlice } from "@reduxjs/toolkit";

export const buttonStateSlice = createSlice({
  name: "buttonState",
  initialState: {
    nextPageState: false,
  },
  reducers: {
    nextPage(state, action) {
      state.nextPageState = action.payload;
    },
  },
});

export const { nextPage } = buttonStateSlice.actions;
export default buttonStateSlice.reducer;
