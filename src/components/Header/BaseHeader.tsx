import { useModal } from "@hooks/useModal";
import { ReactElement } from "react";
import { AuthModal } from "@components/AuthModal";

const BaseHeader = (): ReactElement => {
  const { openModal, modalPortal } = useModal(AuthModal);
  return (
    <div>
      <button onClick={() => openModal()}>Sign In</button>
      {modalPortal}
    </div>
  );
};

export default BaseHeader;
