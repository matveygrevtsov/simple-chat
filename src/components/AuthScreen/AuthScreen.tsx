import { UserStatus } from "@/store/components/user/types";
import { AuthForm } from "../AuthForm/AuthForm";
import { useAppSelector } from "@/store/store";
import { Routes } from "@/constants/navigation";
import { useRedirect } from "@/hooks/useRedirect";

import s from "./AuthScreen.module.css";

export enum AuthScreenType {
  SignIn = "SignIn",
  SignUp = "SignUp",
}

export function AuthScreen() {
  const { redirect } = useRedirect();
  const userStore = useAppSelector((state) => state.userStore);

  // Если авторизация прошла успешно - редиректим в личный кабинет.
  if (userStore.status === UserStatus.Client) {
    redirect(Routes.Me);
  }

  // Если юзер - гость, либо не смог успешно авторизоваться - отображаем форму.
  if (
    userStore.status === UserStatus.Guest ||
    userStore.status === UserStatus.Error
  ) {
    return <AuthForm />;
  }

  // По умолчанию отображаем прелоадер.
  return <h2>загрузка...</h2>;
}
