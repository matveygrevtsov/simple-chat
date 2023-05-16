import { UserCredentials } from "@/store/components/user/types";
import { SignUpForm } from "../SignUpForm/SignUpForm";
import { SignInForm } from "../SignInForm/SignInForm";
import { useAuthForm } from "./useAuthForm";
import cn from "classnames";

import s from "./AuthForm.module.css";

export enum AuthType {
  SignIn = "SignIn",
  SignUp = "SignUp",
}

interface Props {
  onSignUpFormSubmit: (userCredentials: UserCredentials) => void;
  onSignInFormSubmit: (userCredentials: UserCredentials) => void;
}

export function AuthForm({ onSignUpFormSubmit, onSignInFormSubmit }: Props) {
  const { authScreenType, handleClickSignUp, handleClickSignIn } =
    useAuthForm();
  const signUpButtonClassName =
    authScreenType === AuthType.SignUp
      ? cn(s.switchAuthScreenButton, s.activeButton)
      : s.switchAuthScreenButton;
  const signInButtonClassName =
    authScreenType === AuthType.SignIn
      ? cn(s.switchAuthScreenButton, s.activeButton)
      : s.switchAuthScreenButton;

  return (
    <div className={s.root}>
      <div className={s.head}>
        <button onClick={handleClickSignUp} className={signUpButtonClassName}>
          Регистрация
        </button>
        <button onClick={handleClickSignIn} className={signInButtonClassName}>
          Вход
        </button>
      </div>
      {authScreenType === AuthType.SignUp && (
        <SignUpForm onSubmit={onSignUpFormSubmit} />
      )}
      {authScreenType === AuthType.SignIn && (
        <SignInForm onSubmit={onSignInFormSubmit} />
      )}
    </div>
  );
}
