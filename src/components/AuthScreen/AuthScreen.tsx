import { UserStatus } from "@/store/components/user/types";
import { AuthForm } from "../AuthForm/AuthForm";
import { useAppSelector } from "@/store/store";
import { Routes } from "@/constants/navigation";
import { useRedirect } from "@/hooks/useRedirect";
import { AuthScreenStatus, useAuthScreen } from "./useAuthScreen";
import { PreloaderScreen } from "../PreloaderScreen/PreloaderScreen";
import { AuthErrorMessage } from "../AuthErrorMessage/AuthErrorMessage";

import s from "./AuthScreen.module.css";

export enum AuthScreenType {
  SignIn = "SignIn",
  SignUp = "SignUp",
}

export function AuthScreen() {
  const { state, handleSignUpFormSubmit, handleSignInFormSubmit, handleClick } =
    useAuthScreen();
  const { redirect } = useRedirect();
  const userStore = useAppSelector((state) => state.userStore);

  // Если юзер авторизован - редиректим его с этой страницы в личный кабинет.
  if (userStore.status === UserStatus.Authorized) {
    redirect(Routes.Me);
  }

  if (state.status === AuthScreenStatus.Loading) {
    return <PreloaderScreen />;
  }

  return (
    <div className={s.root} onClick={handleClick}>
      <AuthForm
        onSignUpFormSubmit={handleSignUpFormSubmit}
        onSignInFormSubmit={handleSignInFormSubmit}
      />
      {state.status === AuthScreenStatus.Error && (
        <AuthErrorMessage
          className={s.errorMessage}
          errorCode={state.errorCode}
        />
      )}
    </div>
  );
}
