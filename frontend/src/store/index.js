import { configureStore } from "@reduxjs/toolkit";
import nextPage from "./buttonStateSlice";
import darkTheme from "./darkThemeSlice";

export default configureStore({
  reducer: {
    buttonState: nextPage,
    themeState: darkTheme,
  },
});
