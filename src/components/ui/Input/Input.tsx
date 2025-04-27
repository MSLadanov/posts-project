import { ReactElement } from "react";
import "./style.scss";

type TInputProps = {
  type: string;
  name?: string;
  label?: string;
  value: string | number;
  setValue: (value: string) => void;
};

export const Input: React.FC<TInputProps> = ({
  type,
  label,
  value,
  setValue,
}): ReactElement => {
  return (
    <>
      {label && <label></label>}
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
