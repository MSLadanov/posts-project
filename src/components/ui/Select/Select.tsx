import { ReactElement } from "react";
import "./style.scss";

type TSelectProps = {
  options: string[];
  defaultValue: string,
  setValue: (value: string) => void;
};

export const Select: React.FC<TSelectProps> = ({
  defaultValue,
  options,
  setValue,
}): ReactElement => {
  return (
    <select defaultValue={defaultValue} onChange={(e) => setValue(e.target.value)}>
      <option disabled>{defaultValue}</option>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
};
