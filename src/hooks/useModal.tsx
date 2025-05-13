import { ElementType, ReactElement } from "react";
import { createPortal } from "react-dom";

export const useModal = (ModalContent: ElementType) => {
  const modalFragment = document.querySelector("#modal");
  function Modal(): ReactElement {
    return <div>{ModalContent && <ModalContent></ModalContent>}</div>;
  }
  if (modalFragment) {
    createPortal(<Modal />, modalFragment);
  } else {
    throw new Error('Div with id "modal" is undefined!');
  }
};
