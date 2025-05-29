import { ReactElement, useState, useEffect } from "react";
import "./style.scss";

type TTextAreaProps = {
  value: string | number;
  label?: string;
  setValue: (value: string) => void;
  required?: boolean;
  rows?: number;
};

export const TextArea: React.FC<TTextAreaProps> = ({
  value,
  setValue,
  label,
  required = false,
  rows = 4,
}: TTextAreaProps): ReactElement => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

  useEffect(() => {
    setHasValue(!!value);
  }, [value]);

  return (
    <div className={`textarea-container ${isFocused ? "focused" : ""} ${hasValue ? "has-value" : ""}`}>
      {label && (
        <label 
          className={`textarea-label ${isFocused || hasValue ? "label-up" : ""}`}
        >
          {label}
          {required && <span className="required-star">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="styled-textarea"
        rows={rows}
      />
      <div className="textarea-underline">
        <div className={`underline-animation ${isFocused ? "active" : ""}`}></div>
      </div>
    </div>
  );
};