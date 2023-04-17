import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useHeaderMobile } from "./useHeaderMobile";
import { Route } from "../useHeader";
import Link from "next/link";
import cn from "classnames";

import s from "./HeaderMobile.module.css";

interface Props {
  routes: Route[];
  className?: string;
}

export const HeaderMobile: React.FC<Props> = ({ routes, className }) => {
  const { ref, handleClick, isOpened, handleClose } = useHeaderMobile();

  return (
    <header ref={ref} className={cn(s.root, className)}>
      <div className={s.top}>
        <button className={s.button} onClick={handleClick}>
          <FontAwesomeIcon color="white" icon={faBars} />
        </button>
      </div>
      {isOpened && (
        <ul className={s.navigation}>
          {routes.map(({ title, path, isActive }) => {
            const linkClassName = isActive ? s.linkActive : s.link;
            return (
              <li key={path}>
                <Link
                  href={path}
                  className={linkClassName}
                  onClick={handleClose}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
};
