import { configureStore } from "@reduxjs/toolkit";
import darkTheme from "./darkThemeSlice";
import searchForm from "./searchFormSlice";
import tweets from "./tweetsSlice";
import hashtag from "./hashtagSlice";

export default configureStore({
  reducer: {
    themeState: darkTheme,
    searchValue: searchForm,
    tweetsState: tweets,
    hashtagValue: hashtag
  },
});
