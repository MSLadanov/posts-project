import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/PostsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export type AppDispatch = typeof store.dispatch