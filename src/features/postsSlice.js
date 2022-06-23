import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPosts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.currentPosts = action.payload;
    },
  },
});
export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
