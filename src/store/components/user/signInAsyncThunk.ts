import { createAsyncThunk } from "@reduxjs/toolkit";
import { JsonWebToken, UserCredentials } from "./types";
import axios from "axios";

export const signInAsyncThunk = createAsyncThunk<JsonWebToken, UserCredentials>(
  "user/sign-in",
  async function (userCredentials: UserCredentials, thunkAPI) {
    try {
      const response = await axios<JsonWebToken>({
        method: "post",
        url: "",
        data: userCredentials,
      });
      return response.data;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
    return "";
  }
);
