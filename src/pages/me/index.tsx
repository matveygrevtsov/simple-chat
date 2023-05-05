import { Routes } from "@/constants/navigation";
import { UserStatus } from "@/store/components/user/types";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  const userStore = useAppSelector((state) => state.userStore);

  if (userStore.status === UserStatus.Client) {
    return <h1>Личный кабинет</h1>;
  }

  if (userStore.status === UserStatus.Loading) {
    return <h1>Загрузка...</h1>;
  }

  // Если юзер загрузился, но не является клиентом - редиректим его с этой страницы.
  if (typeof window !== "undefined") {
    router.push(Routes.MainPage);
  }
}
