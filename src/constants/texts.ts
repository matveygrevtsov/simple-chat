import { FrontendErrors } from "./backendСontract";

export const texts = {
  SignUp: {
    title: "Регистрация",
    SignUpForm: {
      labels: {
        email: "Почта",
        password: "Пароль",
        repeatPassword: "Повторите пароль",
      },
      validationErrors: {
        emptyEmail: "Email не указан",
        invalidEmail: "Невалидный email",
        emptyPassword: "Пароль не указан",
        shortPassword: "Слишком короткий пароль",
        passwordsMismatch: "Пароли не совпадают",
      },
      submitButtonText: "Зарегистрироваться",
    },
  },
  SignIn: {
    title: "Авторизоваться",
    SignInForm: {
      labels: {
        email: "Почта",
        password: "Пароль",
      },
      validationErrors: {
        emptyEmail: "Email не указан",
        invalidEmail: "Невалидный email",
        emptyPassword: "Пароль не указан",
        invalidPassword: "Невалидный пароль",
      },
      submitButtonText: "Войти",
    },
  },
  AuthErrors: {
    [FrontendErrors.AccessDenied]:
      "К сожалению, вы ввели неверный логин или пароль.",
    [FrontendErrors.UserWithTheSameEmailAlreadyExists]:
      "К сожалению, вы ввели неверный логин или пароль.",
    default: "Что-то пошло не так. Пожалуйста, повторите попытку позже.",
  },
};
