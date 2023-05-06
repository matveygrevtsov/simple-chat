import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { userStoreActions } from "@/store/components/user/userSlice";
import { useAppDispatch } from "@/store/store";
import cn from "classnames";

import s from "./LogOutButton.module.css";

interface Props {
  className?: string;
}

export function LogOutButton({ className }: Props) {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(userStoreActions.logout());

  return (
    <button onClick={handleClick} className={cn(s.root, className)}>
      <FontAwesomeIcon color="white" icon={faRightFromBracket} />
      <span className={s.text}>Выйти</span>
    </button>
  );
}
