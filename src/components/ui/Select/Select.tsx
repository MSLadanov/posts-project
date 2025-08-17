import { ReactElement, useState } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
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
  const [titleValue, setTitleValue] = useState(defaultValue);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const { refElement } = useOutsideClick(() => console.log("close"));
  return (
    <div className="select">
      <div
        className="select__button"
        defaultValue={defaultValue}
        onClick={() => setIsOptionsVisible(true)}
      >
        {" "}
        {titleValue}
      </div>
      <div
        className={"select__options" + (isOptionsVisible ? " visible" : "")}
        ref={refElement}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className="select__option"
            onClick={() => {
              setTitleValue(option[0].toUpperCase() + option.slice(1));
              onChange(option);
              setIsOptionsVisible(false);
            }}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </div>
        ))}
      </div>
    </div>
  );
};
