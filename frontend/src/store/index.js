import { configureStore } from "@reduxjs/toolkit";
import darkTheme from "./darkThemeSlice";
import searchForm from "./searchFormSlice";

export default configureStore({
  reducer: {
    themeState: darkTheme,
    searchValue: searchForm,
  },
});
