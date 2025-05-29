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
    <select 
      className="custom-select"
      defaultValue={defaultValue} 
      onChange={(e) => setValue(e.target.value)}
    >
      <option disabled className="custom-select-default-option">{defaultValue}</option>
      {options.map((option, index) => (
        <option key={index} className="custom-select-option">{option}</option>
      ))}
    </select>
  );
};