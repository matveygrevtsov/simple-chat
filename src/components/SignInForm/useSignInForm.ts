import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { texts } from "@/constants/texts";
import { UserCredentials } from "@/store/components/user/types";

interface FormValues {
  email: string;
  password: string;
}

const PASSWORD_MIN_LENGTH = 6;

const { validationErrors } = texts.SignIn.SignInForm;

const formSchema = object().shape({
  email: string()
    .required(validationErrors.emptyEmail)
    .email(validationErrors.invalidEmail),
  password: string()
    .required(validationErrors.emptyPassword)
    .min(PASSWORD_MIN_LENGTH, validationErrors.invalidPassword),
});

export const useSignInForm = (
  onSubmit: (userCredentials: UserCredentials) => void
) => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    mode: "onTouched",
    // @ts-ignore
    resolver: yupResolver(formSchema),
  });

  const submit = handleSubmit(({ email, password }: FormValues) =>
    onSubmit({ email, password })
  );

  return { submit, register, formState };
};
