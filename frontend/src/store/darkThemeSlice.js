import { createSlice } from "@reduxjs/toolkit";

export const darkThemeSlice = createSlice({
  name: "darkTheme",
  initialState: {
    darkThemeState: false,
  },
  reducers: {
    darkTheme(state, action) {
      state.darkThemeState = action.payload;
    },
  },
});

export const { darkTheme } = darkThemeSlice.actions;
export default darkThemeSlice.reducer;
