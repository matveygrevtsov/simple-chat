import { AuthType, JsonWebToken, UserAuthData } from "./types";
import { backendUrl } from "../../../constants/backendСontract";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
      const errorCode = error?.response?.data?.errorCode || "";
      return thunkAPI.rejectWithValue(errorCode);
    }
  }
);
