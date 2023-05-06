import { UserCredentials } from "@/store/components/user/types";
import { texts } from "@/constants/texts";
import { useSignUpForm } from "./useSignUpForm";
import cn from "classnames";

import s from "./SignUpForm.module.css";

interface Props {
  className?: string;
  onSubmit: (userCredentials: UserCredentials) => void;
}

export const SignUpForm: React.FC<Props> = ({ className, onSubmit }) => {
  const { submit, register, formState } = useSignUpForm(onSubmit);
  const { SignUpForm } = texts.SignUpPage;

  return (
    <form onSubmit={submit} className={cn(className, s.root)}>
      <div>
        <label className={s.label}>{SignUpForm.labels.email}</label>
        <input {...register("email")} type="email" className={s.input} />
        {formState.errors.email && (
          <span className={s.error}>{formState.errors.email.message}</span>
        )}
      </div>
      <div>
        <label className={s.label}>{SignUpForm.labels.password}</label>
        <input {...register("password")} type="password" className={s.input} />
        {formState.errors.password && (
          <span className={s.error}>{formState.errors.password.message}</span>
        )}
      </div>
      <div>
        <label className={s.label}>{SignUpForm.labels.repeatPassword}</label>
        <input
          {...register("repeatPassword")}
          className={s.input}
          type="password"
        />
        {formState.errors.repeatPassword && (
          <span className={s.error}>
            {formState.errors.repeatPassword.message}
          </span>
        )}
      </div>
      <button disabled={!formState.isValid} className={s.submitButton}>
        {SignUpForm.submitButtonText}
      </button>
    </form>
  );
};
