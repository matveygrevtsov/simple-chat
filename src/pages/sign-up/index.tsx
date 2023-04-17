import { texts } from "@/constants/texts";
import { SignUpForm } from "@/components/SignUpForm/SignUpForm";

import s from "./SignUpPage.module.css";

export default function SignUpPage() {
  const { title } = texts.SignUpPage;

  return (
    <>
      <h1 className={s.title}>{title}</h1>
      <SignUpForm
        onStartTyping={console.log}
        onSubmit={console.log}
        className={s.form}
      />
    </>
  );
}
