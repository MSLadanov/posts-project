import { ReactElement } from "react";
import "./style.scss";

type TSelectProps = {
  options: string[];
  value: string;
  setValue: (value: string) => void;
};

export const Select: React.FC<TSelectProps> = ({
  value,
  options,
  setValue,
}): ReactElement => {
  return (
    <select onChange={(e) => setValue(e.target.value)}>
      <option>-----------</option>
      {options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
};
