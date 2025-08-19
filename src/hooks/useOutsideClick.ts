import { useRef } from "react";

export const useOutsideClick = (callback: () => void) => {
  const refElement = useRef(null);
  document.addEventListener("click", (e) => {
  });
  document.removeEventListener('click', () => console.log(''))
  return { refElement };
};
