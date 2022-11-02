import { createSlice } from "@reduxjs/toolkit";

export const hashtagSlice = createSlice({
  name: "hashtag",
  initialState: {
    hashtagValue: "",
  },
  reducers: {
    hashtag(state, action) {
      state.hashtagValue = action.payload;
    },
  },
});

export const { hashtag } = hashtagSlice.actions;
export default hashtagSlice.reducer;
