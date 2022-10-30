import { configureStore } from "@reduxjs/toolkit";
import nextPage from "./buttonStateSlice";

export default configureStore({
  reducer: {
    buttonState: nextPage,
  },
});
