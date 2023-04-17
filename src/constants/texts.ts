export const texts = {
  SignUpPage: {
    title: "Регистрация",
    alreadyHasAccountText: "Уже есть аккаунт ? Авторизуйтесь.",
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
  SignInPage: {
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
};
