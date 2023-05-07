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
      errorCode: string;
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
      .catch((errorCode) => {
        setState({
          status: AuthScreenStatus.Error,
          errorCode,
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

  function handleClick() {
    if (state.status === AuthScreenStatus.Error) {
      setState({
        status: AuthScreenStatus.Init,
      });
    }
  }

  return { state, handleSignUpFormSubmit, handleSignInFormSubmit, handleClick };
}
