import { PropsWithChildren, ReactElement } from "react";
import './style.scss'

export const Container = ({ children }: PropsWithChildren): ReactElement => {
  return <div className="container">{children}</div>;
};
