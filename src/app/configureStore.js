import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import themeReducer from "../features/themeSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});
