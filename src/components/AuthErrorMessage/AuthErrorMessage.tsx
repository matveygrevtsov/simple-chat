import { texts } from "@/constants/texts";
import cn from "classnames";

import s from "./AuthErrorMessage.module.css";

interface Props {
  errorCode: string;
  className?: string;
}

export function AuthErrorMessage({ errorCode, className }: Props) {
  const errorTexts: Record<string, string> = texts.AuthErrors;
  const errorMessage = errorTexts[errorCode] || errorTexts.default;

  return <div className={cn(s.root, className)}>{errorMessage}</div>;
}
