import { ReactElement, ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

type TButtonProps = {
  children?: ReactNode;
  icon: IconDefinition;
};

export const Button: React.FC<TButtonProps> = ({
  children,
  icon,
}): ReactElement => {
  
  return (
    <button className={children === undefined ? 'button_without-text' : 'button_with-text'}>
      <FontAwesomeIcon icon={icon}/>
      {children}
    </button>
  );
};
