import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";
import { useHeader } from "./useHeader";

import s from "./Header.module.css";

export const Header = () => {
  const { routes } = useHeader();

  return (
    <>
      <div className={s.headerMobile}>
        <HeaderMobile routes={routes} />
      </div>
      <div className={s.headerDesktop}>
        <HeaderDesktop routes={routes} />
      </div>
    </>
  );
};
