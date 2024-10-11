"use client";

import Swal from "sweetalert2";

const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

export const userFetch = createAsyncThunk(
  "user/userFetch",
  async (_, thunkAPI) => {
    try {
      let response = await axios.get("https://fakestoreapi.com/users");
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      return response.data;
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  }
);
