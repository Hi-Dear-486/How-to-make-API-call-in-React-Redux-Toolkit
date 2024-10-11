"use client";
const { configureStore } = require("@reduxjs/toolkit");
import userSlice from "./slice/Users";
export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
