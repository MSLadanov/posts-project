import { ReactElement, ReactNode } from "react";

interface IGridProps {
  children: ReactNode;
  classname: string;
}

export const Grid: React.FC<IGridProps> = ({
  children,
  classname,
}): ReactElement => {
  return <div className={`grid ${classname}`}>{children}</div>;
};
