import { createSlice } from "@reduxjs/toolkit";

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    tweetsState: [],
  },
  reducers: {
    tweets(state, action) {
      state.tweetsState = action.payload;
    },
  },
});

export const { tweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
