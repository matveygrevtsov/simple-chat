import { Header } from "@/components/Header/Header";
import { LogOutButton } from "@/components/LogOutButton/LogOutButton";
import { Routes } from "@/constants/navigation";
import { useRedirect } from "@/hooks/useRedirect";
import { UserStatus } from "@/store/components/user/types";
import { useAppSelector } from "@/store/store";

export default function () {
  const { redirect } = useRedirect();
  const userStore = useAppSelector((state) => state.userStore);

  if (userStore.status === UserStatus.Client) {
    return (
      <>
        <Header />
        <h1>Личный кабинет</h1>
      </>
    );
  }

  if (userStore.status === UserStatus.Loading) {
    return <h1>Загрузка...</h1>;
  }

  // Если юзер загрузился, но не является клиентом - редиректим его с этой страницы.
  redirect(Routes.MainPage);
}
