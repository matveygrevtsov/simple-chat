import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";
import { useHeader } from "./useHeader";

import s from "./Header.module.css";

export const Header = () => {
  const { routes } = useHeader();

  return (
    <>
      <HeaderMobile className={s.headerMobile} routes={routes} />
      <HeaderDesktop className={s.headerDesktop} routes={routes} />
    </>
  );
};
