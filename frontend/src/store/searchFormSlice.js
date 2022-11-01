import { createSlice } from "@reduxjs/toolkit";

export const searchFormSlice = createSlice({
  name: "searchForm",
  initialState: {
    searchFormValue: "",
  },
  reducers: {
    searchForm(state, action) {
      state.searchFormValue = action.payload;
    },
  },
});

export const { searchForm } = searchFormSlice.actions;
export default searchFormSlice.reducer;
