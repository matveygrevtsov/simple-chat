import {
  UserCredentials,
  UserErrorCode,
  UserStatus,
} from "@/store/components/user/types";
import { useSignInForm } from "./useSignInForm";
import { useAppSelector } from "@/store/store";
import { texts } from "@/constants/texts";
import cn from "classnames";

import s from "./SignInForm.module.css";

interface Props {
  className?: string;
  onSubmit: (userCredentials: UserCredentials) => void;
}

export const SignInForm: React.FC<Props> = ({ className, onSubmit }) => {
  const userStore = useAppSelector((state) => state.userStore);
  const { submit, register, formState } = useSignInForm(onSubmit);
  const { SignInForm } = texts.SignInPage;

  return (
    <>
      <form onSubmit={submit} className={cn(className, s.root)}>
        <div>
          <label className={s.label}>{SignInForm.labels.email}</label>
          <input {...register("email")} type="email" className={s.input} />
          {formState.errors.email && (
            <span className={s.error}>{formState.errors.email.message}</span>
          )}
        </div>
        <div>
          <label className={s.label}>{SignInForm.labels.password}</label>
          <input
            {...register("password")}
            type="password"
            className={s.input}
          />
          {formState.errors.password && (
            <span className={s.error}>{formState.errors.password.message}</span>
          )}
        </div>
        <button disabled={!formState.isValid} className={s.submitButton}>
          {SignInForm.submitButtonText}
        </button>
      </form>
      {userStore.status === UserStatus.Error &&
        userStore.error.errorCode === UserErrorCode.SignInError && (
          <span>Произошла ошибка при авторизации.</span>
        )}
    </>
  );
};
