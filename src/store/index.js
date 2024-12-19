import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slice/auth";
import ArticleSlice from "../slice/article";

export default configureStore({
  reducer: {
    auth: AuthSlice,
    article: ArticleSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
