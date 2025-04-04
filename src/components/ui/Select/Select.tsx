import { ReactElement } from "react";
import "./style.scss";

type TSelectProps = {
  options: string[];
  setValue: (value: string) => void;
};

export const Select: React.FC<TSelectProps> = ({
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
