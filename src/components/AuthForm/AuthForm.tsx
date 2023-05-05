import { SignUpForm } from "../SignUpForm/SignUpForm";
import { SignInForm } from "../SignInForm/SignInForm";
import { useAuthForm } from "./useAuthForm";

import s from "./AuthForm.module.css";

export enum AuthType {
  SignIn = "SignIn",
  SignUp = "SignUp",
}

export function AuthForm() {
  const {
    authScreenType,
    handleClickSignUp,
    handleClickSignIn,
    handleSignInFormSubmit,
    handleSignUpFormSubmit,
  } = useAuthForm();

  return (
    <div className={s.root}>
      <div className={s.head}>
        <button
          onClick={handleClickSignUp}
          className={s.switchAuthScreenButton}
        >
          Регистрация
        </button>
        <button
          onClick={handleClickSignIn}
          className={s.switchAuthScreenButton}
        >
          Вход
        </button>
      </div>
      {authScreenType === AuthType.SignUp && (
        <SignUpForm onSubmit={handleSignUpFormSubmit} />
      )}
      {authScreenType === AuthType.SignIn && (
        <SignInForm onSubmit={handleSignInFormSubmit} />
      )}
    </div>
  );
}
