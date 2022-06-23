import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import themeReducer from "../features/themeSlice";
import postsReducer from "../features/postsSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    posts: postsReducer
  },
});
