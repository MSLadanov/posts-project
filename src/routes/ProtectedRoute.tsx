import { PropsWithChildren, ReactElement } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router";

const ProtectedRoute = ({
  children,
}: PropsWithChildren): ReactElement => {
  const [cookies] = useCookies(["accessToken"]);
  return cookies.accessToken ? <>{children}</> : <Navigate to={"/"} />;
};

export default ProtectedRoute