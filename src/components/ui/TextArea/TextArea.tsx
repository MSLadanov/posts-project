import { ReactElement } from "react";
import "./style.scss";

type TTextAreaProps = {
  value: string | number;
  setValue: (value: string) => void;
};

export const TextArea : React.FC<TTextAreaProps> = (): ReactElement => {
  return <textarea></textarea>;
};
