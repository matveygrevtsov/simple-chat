import { authAsyncThunk } from "@/store/components/user/authAsyncThunk";
import {
  AuthType,
  UserAuthData,
  UserCredentials,
} from "@/store/components/user/types";
import { useAppDispatch } from "@/store/store";
import { useState } from "react";

export enum AuthScreenStatus {
  Init = "Init",
  Loading = "Loading",
  Error = "Error",
}

type State =
  | {
      status: AuthScreenStatus.Init;
    }
  | {
      status: AuthScreenStatus.Loading;
    }
  | {
      status: AuthScreenStatus.Error;
      errorMessage: string;
    };

export function useAuthScreen() {
  const [state, setState] = useState<State>({
    status: AuthScreenStatus.Init,
  });
  const dispatch = useAppDispatch();

  function handleAuthFormSubmit({ authType, userCredentials }: UserAuthData) {
    setState({
      status: AuthScreenStatus.Loading,
    });
    dispatch(
      authAsyncThunk({
        authType,
        userCredentials,
      })
    )
      .unwrap()
      .catch((error) => {
        setState({
          status: AuthScreenStatus.Error,
          errorMessage: error.message,
        });
      });
  }

  function handleSignUpFormSubmit(userCredentials: UserCredentials) {
    handleAuthFormSubmit({
      authType: AuthType.SignUp,
      userCredentials,
    });
  }

  function handleSignInFormSubmit(userCredentials: UserCredentials) {
    handleAuthFormSubmit({
      authType: AuthType.SignIn,
      userCredentials,
    });
  }

  return { state, handleSignUpFormSubmit, handleSignInFormSubmit };
}
