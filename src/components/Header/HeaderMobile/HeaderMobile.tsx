import { Route } from "../useHeader";
import cn from "classnames";

import s from "./HeaderMobile.module.css";

interface Props {
  routes: Route[];
  className?: string;
}

export const HeaderMobile: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn(s.root, className)}>
      TODO: доработать хедер для мобильной версии
    </header>
  );
};
