import { PropsWithChildren, ReactElement } from "react";
import { useCookies } from "react-cookie";

export const ProtectedComponent = ({
  children,
}: PropsWithChildren): ReactElement => {
  const [cookies] = useCookies(["accessToken"]);
  if (cookies.accessToken) {
    return <>{children}</>;
  } else {
    return <div></div>;
  }
};
