import { createAsyncThunk } from "@reduxjs/toolkit";
import { JsonWebToken, UserCredentials } from "./types";
import axios from "axios";

export const signUpAsyncThunk = createAsyncThunk<JsonWebToken, UserCredentials>(
  "user/sign-up",
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
