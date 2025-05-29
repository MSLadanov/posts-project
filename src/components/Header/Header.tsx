import { ReactElement, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "@/store/slices/UserSlice";
import { AppDispatch } from "@/store";
import SignedHeader from "./SignedHeader";
import { useCheckToken } from "@/hooks/useCheckToken";
import BaseHeader from "./BaseHeader";
import { Breadcrumbs } from "../ui/Breadcrumbs";

export const Header = (): ReactElement => {
  const [cookies] = useCookies(["accessToken"]);
  const dispatch = useDispatch<AppDispatch>();
  const { isLogged } = useCheckToken();
  useEffect(() => {
    if (cookies.accessToken) {
      dispatch(getCurrentUser(cookies.accessToken));
    }
  }, [cookies, dispatch]);
  return <header>
    <Breadcrumbs/>
    {isLogged ? <SignedHeader /> : <BaseHeader />}
    </header>;
};
