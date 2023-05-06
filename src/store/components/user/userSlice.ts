import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { JsonWebToken, UserState, UserStatus } from "./types";
import { authAsyncThunk } from "./authAsyncThunk";

const initialState = {
  status: UserStatus.UnAuthorized,
} as UserState;

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout() {
      return {
        status: UserStatus.UnAuthorized,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      authAsyncThunk.fulfilled,
      (userState, action: PayloadAction<JsonWebToken>) => {
        return {
          status: UserStatus.Authorized,
          jwt: action.payload,
        };
      }
    );
  },
});

export const userStoreActions = slice.actions;

export const userReducer = slice.reducer;
