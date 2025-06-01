import { useModal } from "@hooks/useModal";
import { ReactElement } from "react";
import { AuthModal } from "@components/AuthModal";
import { Button } from "@ui/Button";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const BaseHeader = (): ReactElement => {
  const { openModal, modalPortal } = useModal(AuthModal);
  return (
    <nav>
      <Button icon={faRightToBracket} action={() => openModal()}>Sign In</Button>
      {modalPortal}
    </nav>
  );
};

export default BaseHeader;
