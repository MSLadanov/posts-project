import { ReactElement } from "react";
import "./style.scss";

type TTextAreaProps = {
  value: string | number;
  setValue: (value: string) => void;
};

export const TextArea: React.FC<TTextAreaProps> = ({
  value,
  setValue,
}: TTextAreaProps): ReactElement => {
  return (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></textarea>
  );
};
