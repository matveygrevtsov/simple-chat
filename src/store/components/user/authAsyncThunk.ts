import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthType, JsonWebToken, UserAuthData } from "./types";
import axios from "axios";
import { backendUrl } from "@/constants/constants";

export const authAsyncThunk = createAsyncThunk<JsonWebToken, UserAuthData>(
  "user/auth",
  async function ({ userCredentials, authType }, thunkAPI) {
    try {
      const url =
        authType === AuthType.SignIn
          ? `${backendUrl}/user/sign-in/`
          : `${backendUrl}/user/sign-up/`;
      const response = await axios<JsonWebToken>({
        method: "post",
        url,
        data: userCredentials,
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
