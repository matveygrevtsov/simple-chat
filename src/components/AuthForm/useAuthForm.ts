import { signInAsyncThunk } from "@/store/components/user/signInAsyncThunk";
import { signUpAsyncThunk } from "@/store/components/user/signUpAsyncThunk";
import { UserCredentials } from "@/store/components/user/types";
import { useAppDispatch } from "@/store/store";
import { useState } from "react";
import { AuthType } from "./AuthForm";

export function useAuthForm() {
  const dispatch = useAppDispatch();
  const [authScreenType, setAuthScreenType] = useState<AuthType>(
    AuthType.SignIn
  );

  const handleClickSignUp = () => setAuthScreenType(AuthType.SignUp);
  const handleClickSignIn = () => setAuthScreenType(AuthType.SignIn);

  const handleSignInFormSubmit = (userCredentials: UserCredentials) => {
    dispatch(signInAsyncThunk(userCredentials));
  };

  const handleSignUpFormSubmit = (userCredentials: UserCredentials) => {
    dispatch(signUpAsyncThunk(userCredentials));
  };

  return {
    authScreenType,
    handleClickSignUp,
    handleClickSignIn,
    handleSignInFormSubmit,
    handleSignUpFormSubmit,
  };
}
