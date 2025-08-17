import { useRef } from "react";

export const useOutsideClick = (callback: () => void) => {
  const refElement = useRef(null);
  document.addEventListener("click", (e) => {
    console.log(e.target)
    console.log(refElement.current)
  });
  return { refElement };
};
