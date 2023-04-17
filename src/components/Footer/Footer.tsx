import cn from "classnames";

import s from "./Footer.module.css";

interface Props {
  className: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return <footer className={cn(s.root, className)}>Футер</footer>;
};
