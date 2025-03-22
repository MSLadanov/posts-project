import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch