import { SignInForm } from "@/components/SignInForm/SignInForm";
import { texts } from "@/constants/texts";

import s from "./SignInPage.module.css";

export default function SignInPage() {
  const { title } = texts.SignUpPage;

  return (
    <>
      <h1 className={s.title}>{title}</h1>
      <SignInForm
        onStartTyping={console.log}
        onSubmit={console.log}
        className={s.form}
      />
    </>
  );
}
