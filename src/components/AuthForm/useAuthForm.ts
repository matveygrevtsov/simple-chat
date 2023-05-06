import { useState } from "react";
import { AuthType } from "./AuthForm";

export function useAuthForm() {
  const [authScreenType, setAuthScreenType] = useState<AuthType>(
    AuthType.SignIn
  );

  const handleClickSignUp = () => setAuthScreenType(AuthType.SignUp);
  const handleClickSignIn = () => setAuthScreenType(AuthType.SignIn);

  return {
    authScreenType,
    handleClickSignUp,
    handleClickSignIn,
  };
}
