import { UserStatus } from "@/store/components/user/types";
import { AuthForm } from "../AuthForm/AuthForm";
import { useAppSelector } from "@/store/store";
import { Routes } from "@/constants/navigation";
import { useRedirect } from "@/hooks/useRedirect";
import { AuthScreenStatus, useAuthScreen } from "./useAuthScreen";

import s from "./AuthScreen.module.css";

export enum AuthScreenType {
  SignIn = "SignIn",
  SignUp = "SignUp",
}

export function AuthScreen() {
  const { state, handleSignUpFormSubmit, handleSignInFormSubmit } =
    useAuthScreen();
  const { redirect } = useRedirect();
  const userStore = useAppSelector((state) => state.userStore);

  // Если юзер авторизован - редиректим его с этой страницы в личный кабинет.
  if (userStore.status === UserStatus.Authorized) {
    redirect(Routes.Me);
  }

  if (state.status === AuthScreenStatus.Loading) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <>
      <AuthForm
        onSignUpFormSubmit={handleSignUpFormSubmit}
        onSignInFormSubmit={handleSignInFormSubmit}
      />
      {state.status === AuthScreenStatus.Error && (
        <span>{state.errorMessage}</span>
      )}
    </>
  );
}
