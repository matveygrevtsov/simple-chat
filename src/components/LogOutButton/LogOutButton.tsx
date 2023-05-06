import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "@/store/store";
import cn from "classnames";

import s from "./LogOutButton.module.css";

interface Props {
  className?: string;
}

export function LogOutButton({ className }: Props) {
  const dispatch = useAppDispatch();
  const handleClick = () => {};

  return (
    <button onClick={handleClick} className={cn(s.root, className)}>
      <FontAwesomeIcon color="white" icon={faRightFromBracket} />
      <span className={s.text}>Выйти</span>
    </button>
  );
}
