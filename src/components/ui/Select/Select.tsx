import { ReactElement } from "react";
import "./style.scss";

type TSelectProps = {
  options: string[];
  defaultValue: string;
  onChange: (option: string) => void;
};

export const Select: React.FC<TSelectProps> = ({
  defaultValue,
  options,
  onChange,
}): ReactElement => {
  return (
    <div className="select">
      <div className="select__button" defaultValue={defaultValue}>
        {" "}
        {defaultValue}
      </div>
      <div className="select__options">
        {options.map((option, index) => (
          <div
            key={index}
            className="select__option"
            onClick={() => onChange(option)}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </div>
        ))}
      </div>
    </div>
  );
};
