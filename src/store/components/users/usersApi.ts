import { backendUrl } from "@/constants/backendСontract";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: backendUrl }),
  endpoints: (build) => ({
    getUsers: build.query<Array<{ id: number; email: string }>, undefined>({
      // Первый аргумент дженерика - это то, что возвращает запрос, второй - это параметры, которые мы передаём в запрос (например, айдишник товара, данные которого мы хотим скачать)
      // query - это когда запрос на скачивание данных, а mutation - на изменение данных.
      query: () => "/user", // дополнение к baseUrl (можно писать без слеша)
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
