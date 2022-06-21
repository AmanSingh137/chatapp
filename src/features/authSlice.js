import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { reset, setUser } = authSlice.actions;
export default authSlice.reducer;
