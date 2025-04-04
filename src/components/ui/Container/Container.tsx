import { PropsWithChildren, ReactElement } from "react";

export const Container = ({ children }: PropsWithChildren): ReactElement => {
  return <div className="container">{children}</div>;
};
