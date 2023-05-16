import { Header } from "@/components/Header/Header";
import { Routes } from "@/constants/navigation";
import { useRedirect } from "@/hooks/useRedirect";
import { UserStatus } from "@/store/components/user/types";
import { useAppSelector } from "@/store/store";
import { Content } from "./components/Content/Content";

export default function () {
  const { redirect } = useRedirect();
  const userStore = useAppSelector((state) => state.userStore);

  if (userStore.status === UserStatus.Authorized) {
    return (
      <>
        <Header />
        <Content />
      </>
    );
  }

  // Если юзер не является клиентом - редиректим его с этой страницы.
  redirect(Routes.MainPage);
}
