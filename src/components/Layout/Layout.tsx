import { Footer } from "../Footer/Footer";

import s from "./Layout.module.css";

interface Props {
  children?: JSX.Element;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className={s.root}>
      <div className={s.container}>
        <div className={s.content}>{children}</div>
      </div>
      <Footer className={s.footer} />
    </main>
  );
};
