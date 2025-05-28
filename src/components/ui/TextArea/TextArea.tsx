import { ReactElement } from "react";
import "./style.scss";

type TTextAreaProps = {
  value: string | number;
  label?: string;
  setValue: (value: string) => void;
};

export const TextArea: React.FC<TTextAreaProps> = ({
  value,
  setValue,
  label,
}: TTextAreaProps): ReactElement => {
  return (
    <>
      {label && <label>{label}</label>}
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </>
  );
};
