import { Preloader } from "@/components/Preloader/Preloader";
import { useGetUsersQuery } from "@/store/components/users/usersApi";

export const Content = () => {
  const { data, error, isLoading } = useGetUsersQuery(undefined);

  if (data) {
    return (
      <ul>
        {data.map(({ id, email }) => (
          <li key={id}>{email}</li>
        ))}
      </ul>
    );
  }

  if (error) {
    return (
      <h2>Похоже, произошла ошибка при скачивании. Повторите попытку позже</h2>
    );
  }

  return <Preloader />;
};
