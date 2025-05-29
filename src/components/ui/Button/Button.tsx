import { ReactElement, ReactNode } from "react";
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
  style?: 'transparent' | 'blue' | 'red' | 'black';
  action: (arg: T) => T;
  payload: T;
};
export const Button: React.FC<TButtonProps<object | string>> = ({
  children,
  icon,
  action,
  style = 'transparent',
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
          children === undefined ? `button_without-text ${style}` : `button_with-text ${style}`
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
