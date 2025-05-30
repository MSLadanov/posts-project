import { ReactElement, ReactNode, SetStateAction } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useModal } from "@/hooks/useModal";
import { LoginRequiredNotice } from "@/components/LoginRequiredNotice";
import { useCheckToken } from "@/hooks/useCheckToken";
import "./style.scss";

type TButtonProps<T> = {
  children?: ReactNode;
  icon: IconDefinition;
  disabled?: boolean;
  isAuthOnly?: boolean;
  style?: { color: "transparent" | "blue" | "red" | "black" };
  action: (arg: T) => T;
  payload: T;
};
export const Button: React.FC<
  TButtonProps<object | string | SetStateAction<any>>
> = ({
  children,
  icon,
  action,
  style = {color: 'transparent'},
  disabled = false,
  isAuthOnly = false,
  payload,
}): ReactElement => {
  const { isLogged } = useCheckToken();
  const { openModal, modalPortal } = useModal(LoginRequiredNotice);
  return (
    <>
      <button
        className={
          children === undefined
            ? `button_without-text ${style.color}`
            : `button_with-text ${style.color}`
        }
        onClick={() =>
          isAuthOnly
            ? isLogged
              ? action(payload)
              : openModal()
            : action(payload)
        }
        disabled={disabled}
      >
        <FontAwesomeIcon icon={icon} />
        {children}
      </button>
      <>{modalPortal}</>
    </>
  );
};
