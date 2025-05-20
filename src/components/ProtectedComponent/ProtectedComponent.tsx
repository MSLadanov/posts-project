import { PropsWithChildren, ReactElement } from "react";
import { useCookies } from "react-cookie";

export const ProtectedComponent = ({
  children,
}: PropsWithChildren): ReactElement | void => {
  const [cookies] = useCookies(["accessToken"]);
  if (cookies.accessToken) {
    return <>{children}</>;
  }
};
