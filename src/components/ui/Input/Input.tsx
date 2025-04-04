import { ReactElement } from "react";
import "./style.scss";

type TInputProps = {
  type: string;
  value: string | number;
  setValue: (value: string) => void;
};

export const Input: React.FC<TInputProps> = ({
  type,
  value,
  setValue,
}): ReactElement => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
