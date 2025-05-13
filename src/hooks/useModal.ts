import { ReactNode } from "react";
import { createPortal } from "react-dom";

const useModal = (ModalContent: ReactNode) => {
  const modalFragment = document.querySelector("#modal");
  function Modal () {
    return (<div></div>)
  }
  if (modalFragment) {
    createPortal(ModalContent, modalFragment);
  } else {
    throw new Error('Div with id "modal" is undefined!');
  }
};
