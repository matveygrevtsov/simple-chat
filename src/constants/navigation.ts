export enum Routes {
  MainPage = "/",
  Me = "/me",
  Chat = "/chat",
}

export const routesForLoggedInUser = [
  {
    path: Routes.Me,
    title: "Мои данные",
  },
  {
    path: Routes.Chat,
    title: "Сообщения",
  },
];
