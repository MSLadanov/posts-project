import { Button } from "@/components/ui/Button";
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons";
import { ElementType, ReactElement, useState } from "react";
import { createPortal } from "react-dom";

export const useModal = (ModalContent: ElementType) => {
  const [isOpened, setIsOpened] = useState(false);
  function Modal(): ReactElement {
    return (
      <div className="modal-layout">
        <div className="modal">
          <Button icon={faXmarkSquare} action={() => setIsOpened(false)}/>
          <ModalContent />
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
