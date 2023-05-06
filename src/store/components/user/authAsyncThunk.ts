import { createAsyncThunk } from "@reduxjs/toolkit";
import { JsonWebToken, UserAuthData } from "./types";
import axios from "axios";

export const authAsyncThunk = createAsyncThunk<JsonWebToken, UserAuthData>(
  "user/sign-up",
  async function ({ userCredentials }, thunkAPI) {
    try {
      const response = await axios<JsonWebToken>({
        method: "post",
        url: ``,
        data: userCredentials,
      });
      return response.data;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
    return "";
  }
);
