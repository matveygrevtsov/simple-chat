import { useForm } from "react-hook-form";
import { object, string, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { texts } from "@/constants/texts";

interface FormValues {
  email: string;
  password: string;
  repeatPassword: string;
}

const PASSWORD_MIN_LENGTH = 6;

const { validationErrors } = texts.SignUpPage.SignUpForm;

const formSchema = object().shape({
  email: string()
    .required(validationErrors.emptyEmail)
    .email(validationErrors.invalidEmail),
  password: string()
    .required(validationErrors.emptyPassword)
    .min(PASSWORD_MIN_LENGTH, validationErrors.shortPassword),
  repeatPassword: string().oneOf(
    [ref("password")],
    texts.SignUpPage.SignUpForm.validationErrors.passwordsMismatch
  ),
});

export const useSignUpForm = (
  onSubmit: (email: string, password: string) => void
) => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    mode: "onTouched",
    // @ts-ignore
    resolver: yupResolver(formSchema),
  });

  const submit = handleSubmit(({ email, password }: FormValues) =>
    onSubmit(email, password)
  );

  return { submit, register, formState };
};
