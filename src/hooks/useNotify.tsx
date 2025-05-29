import { TNotifyType } from "@/types/types";
import {
  faCircleExclamation,
  faTriangleExclamation,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const useNotify = () => {
  const [notifyState, setNotifyState] = useState<{
    type: TNotifyType | "";
    text: string;
    isOpened: boolean;
  }>({
    type: "",
    text: "",
    isOpened: false,
  });
  const notify = (text: string, type: TNotifyType) => {
    setNotifyState({ text, type, isOpened: true });
  };
  const clearNotify = () => {
    setNotifyState({
      type: "",
      text: "",
      isOpened: false,
    });
  };
  const Notify = (): ReactElement => {
    useEffect(() => {
      const timer = setTimeout(() => {
        clearNotify();
      }, 6000);
      return () => clearTimeout(timer);
    }, []);
    if (!notifyState.type) return <></>;
    const icon = {
      error: faCircleExclamation,
      warning: faTriangleExclamation,
      success: faCircleCheck,
    };
    return (
      <div
        className={`notify${
          notifyState.isOpened ? `__visible ${notifyState.type}` : ""
        }`}
      >
        <FontAwesomeIcon icon={icon[notifyState.type]} />
        <p>{notifyState.text}</p>
      </div>
    );
  };
  const notifyContainer = document.querySelector("#notify-box");
  const notifyPortal =
    notifyState.isOpened &&
    notifyContainer &&
    createPortal(<Notify />, notifyContainer);
  return { notify, notifyPortal };
};
