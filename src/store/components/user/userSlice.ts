import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { JsonWebToken, UserErrorCode, UserState, UserStatus } from "./types";
import { signUpAsyncThunk } from "./signUpAsyncThunk";
import { signInAsyncThunk } from "./signInAsyncThunk";

const initialState = {
  status: UserStatus.Guest,
} as UserState;

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpAsyncThunk.pending, (state, action) => {
        return {
          status: UserStatus.Loading,
        };
      })
      .addCase(signUpAsyncThunk.rejected, (state, action) => {
        return {
          status: UserStatus.Error,
          error: {
            errorMessage: action.error.message || "",
            errorCode: UserErrorCode.SignUpError,
          },
        };
      })
      .addCase(
        signUpAsyncThunk.fulfilled,
        (state, action: PayloadAction<JsonWebToken>) => {
          return {
            status: UserStatus.Client,
            jwt: action.payload,
          };
        }
      )
      .addCase(signInAsyncThunk.pending, (state, action) => {
        return {
          status: UserStatus.Loading,
        };
      })
      .addCase(signInAsyncThunk.rejected, (state, action) => {
        return {
          status: UserStatus.Error,
          error: {
            errorMessage: action.error.message || "",
            errorCode: UserErrorCode.SignInError,
          },
        };
      })
      .addCase(
        signInAsyncThunk.fulfilled,
        (state, action: PayloadAction<JsonWebToken>) => {
          return {
            status: UserStatus.Client,
            jwt: action.payload,
          };
        }
      );
  },
});

export const userStoreActions = slice.actions;

export const userReducer = slice.reducer;
