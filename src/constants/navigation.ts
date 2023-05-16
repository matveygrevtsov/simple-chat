export enum Routes {
  MainPage = "/",
  SearchUsers = "/search-users",
  Chat = "/chat",
}

export const routesForLoggedInUser = [
  {
    path: Routes.SearchUsers,
    title: "Поиск собеседников",
  },
  {
    path: Routes.Chat,
    title: "Сообщения",
  },
];
