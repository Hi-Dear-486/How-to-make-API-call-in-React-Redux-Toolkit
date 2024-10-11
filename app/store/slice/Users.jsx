"use client";
import { createSlice } from "@reduxjs/toolkit";
import { userFetch } from "../api/Userapi";
import { useSelector } from "react-redux";

const initialState = {
  formData: {
    user: null,
  },
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userFetch.fulfilled, (state, { payload }) => {
      state.formData.user = payload;
    });
  },
});

export const selectStateData = () => {
  return useSelector((state) => state.users);
};
export default userSlice.reducer;
