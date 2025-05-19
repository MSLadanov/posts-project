import { ReactElement, ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

type TButtonProps<T> = {
  children?: ReactNode;
  icon: IconDefinition;
  action: (arg: T) => T;
  payload: T;
};
export const Button: React.FC<TButtonProps<object | string>> = ({
  children,
  icon,
  action,
  payload
}): ReactElement => {
  return (
    <button
      className={
        children === undefined ? "button_without-text" : "button_with-text"
      }
      onClick={() => action(payload)}
    >
      <FontAwesomeIcon icon={icon} />
      {children}
    </button>
  );
};
