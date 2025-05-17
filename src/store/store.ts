import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/PostsSlice";
import userReducer from "./slices/UserSlice"

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer
  },
});

export type AppDispatch = typeof store.dispatch