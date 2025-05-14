import { ElementType, ReactElement, useState } from "react";
import { createPortal } from "react-dom";

export const useModal = (ModalContent: ElementType) => {
  const [isOpened, setIsOpened] = useState(false);
  function Modal(): ReactElement {
    return (
      <div className={isOpened ? 'modal-layout active' : 'modal-layout'}>
        <div className="modal">
          <button onClick={() => setIsOpened(false)}>(X)</button>
          <ModalContent></ModalContent>
        </div>
      </div>
    );
  }
  function openModal() {
    setIsOpened(true);
  }
  const modalContainer = document.querySelector("#modal-box");
  const modalPortal =
    isOpened && modalContainer ? createPortal(<Modal />, modalContainer) : null;
  return { openModal, modalPortal };
};
