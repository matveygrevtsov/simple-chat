import { Route } from "../useHeader";
import Link from "next/link";
import cn from "classnames";

import s from "./HeaderDesktop.module.css";

interface Props {
  routes: Route[];
  className?: string;
}

export const HeaderDesktop: React.FC<Props> = ({ routes, className }) => {
  return (
    <header className={cn(s.root, className)}>
      <ul className={s.navigation}>
        {routes.map(({ title, path, isActive }) => {
          const linkClassName = isActive ? s.linkActive : s.link;
          return (
            <li key={path}>
              <Link href={path} className={linkClassName}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
