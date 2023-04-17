export enum Routes {
  SignUp = "/sign-up",
  SignIn = "/sign-in",
}

export const navigation = {
  unauthorized: [
    {
      title: "Зарегистрироваться",
      path: Routes.SignUp,
    },
    {
      title: "Авторизоваться",
      path: Routes.SignIn,
    },
  ],
  authorized: [],
};
