import { ReactElement, ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

type TButtonProps<T> = {
  children?: ReactNode;
  icon: IconDefinition;
  feature: {
    action: (arg: T) => T;
    arg: T
  }
};
export const Button: React.FC<TButtonProps<object | string >> = ({
  children,
  icon,
  feature,
}): ReactElement => {
  return (
    <button
      className={
        children === undefined ? "button_without-text" : "button_with-text"
      }
      onClick={() => feature.action(feature.arg)} 
    >
      <FontAwesomeIcon icon={icon} />
      {children}
    </button>
  );
};
