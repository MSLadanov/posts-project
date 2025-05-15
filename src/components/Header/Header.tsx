import { ReactElement } from "react";
import { useModal } from "@hooks/useModal";
import { AuthModal } from "../AuthModal";

export const Header = (): ReactElement => {
  const { openModal, modalPortal } = useModal(AuthModal);
  return (
    <header>
      <h1>Header</h1>
      <button onClick={() => openModal()}>Sign In</button>
      {modalPortal}
    </header>
  );
};
