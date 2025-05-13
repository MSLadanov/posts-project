import { ReactElement } from "react";
import { useModal } from "@hooks/useModal";
import { SignInModal } from "../SignInModal";

export const Header = (): ReactElement => {
  const { openModal, modalPortal } = useModal(SignInModal);
  return (
    <header>
      <h1>Header</h1>
      <button onClick={() => openModal()}>Sign In</button>
      {modalPortal}
    </header>
  );
};
