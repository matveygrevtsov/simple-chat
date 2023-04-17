import { useClickOutsideListener } from "@/hooks/useClickOutsideListener";
import { useState } from "react";

export const useHeaderMobile = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const ref = useClickOutsideListener<HTMLHeadElement>(handleClose);

  function handleClose() {
    if (isOpened) {
      setIsOpened(false);
    }
  }

  function handleClick() {
    setIsOpened((prevValue) => !prevValue);
  }

  return { ref, handleClick, isOpened, handleClose };
};
