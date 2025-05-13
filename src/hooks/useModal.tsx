import { ElementType, ReactElement, useState } from "react";
import { createPortal } from "react-dom";

export const useModal = (ModalContent: ElementType) => {
  const [isOpened, setIsOpened] = useState(false);
  function Modal(): ReactElement {
    console.log('Modal JSX')
    return (
      <div>
        <button onClick={() => setIsOpened(false)}>(X)</button>
        <ModalContent></ModalContent>
      </div>
    );
  }
  function openModal() {
    console.log('Modal open!')
    setIsOpened(true);
  }
  const modalFragment = document.querySelector("#modal");
  if (modalFragment) {
    createPortal(isOpened ? <Modal /> : null, modalFragment);
  } else {
    throw new Error('Div with id "modal" is undefined!');
  }
  return { openModal };
};
