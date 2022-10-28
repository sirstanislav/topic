import { createSlice } from "@reduxjs/toolkit";

export const buttonStateSlice = createSlice({
  name: "buttonState",
  initialState: {
    nextPageState: false,
    nextToken: "",
  },
  reducers: {
    nextPage(state, action) {
      state.nextPage = action.payload;
    },
    tokenState(state, action) {
      state.nextToken = action.payload;
    },
  },
});

export const { nextPage, tokenState } = buttonStateSlice.actions;
export default buttonStateSlice.reducer;
