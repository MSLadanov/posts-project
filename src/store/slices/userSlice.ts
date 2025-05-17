import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  loading: "idle",
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userReducer.reducer;
