import { useCheckToken } from "@/hooks/useCheckToken";
import { PropsWithChildren, ReactElement } from "react";

export const ProtectedComponent = ({
  children,
}: PropsWithChildren): ReactElement => {
  const { isLogged } = useCheckToken();
  if (isLogged) {
    return <>{children}</>;
  } else {
    return <div></div>;
  }
};
