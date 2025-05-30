import { ReactElement, useState, useEffect } from "react";
import "./style.scss";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  value: string | number;
  required?: boolean;
  isChecked?: boolean;
  setValue: (value: string) => void;
};

export const Input: React.FC<TInputProps> = ({
  type,
  name,
  label,
  value,
  required = false,
  isChecked = false,
  setValue,
}): ReactElement => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

  useEffect(() => {
    setHasValue(!!value);
  }, [value]);

  return (
    <div className={`input-container ${isFocused ? "focused" : ""} ${hasValue ? "has-value" : ""}`}>
      {label && (
        <label 
          htmlFor={name}
          className={`input-label ${isFocused || hasValue ? "label-up" : ""}`}
        >
          {label}
          {required && <span className="required-star">*</span>}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        checked={isChecked}
        className="styled-input"
      />
      <div className="input-underline">
        <div className={`underline-animation ${isFocused ? "active" : ""}`}></div>
      </div>
    </div>
  );
};