import { useModal } from "@hooks/useModal";
import { ReactElement } from "react";
import { AuthModal } from "@components/AuthModal";
import { useNotify } from "@/hooks/useNotify";

const BaseHeader = (): ReactElement => {
  const { openModal, modalPortal } = useModal(AuthModal);
  const { notify, notifyPortal } = useNotify();
  return (
    <div>
      <button onClick={() => openModal()}>Sign In</button>
      <button onClick={() => notify("Error", "error")}>Error</button>
      <button onClick={() => notify("Warning", "warning")}>Warning</button>
      <button onClick={() => notify("Success", "success")}>Success</button>
      {modalPortal}
      {notifyPortal}
    </div>
  );
};

export default BaseHeader;
