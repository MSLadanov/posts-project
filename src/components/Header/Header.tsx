import { ReactElement, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "@/store/slices/UserSlice";
import { AppDispatch } from "@/store";
import { TUserStore } from "@/types/types";
import SignedHeader from "./SignedHeader";
import BaseHeader from "./BaseHeader";

export const Header = (): ReactElement => {
  const [cookies] = useCookies(["accessToken"]);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (cookies.accessToken) {
      dispatch(getCurrentUser(cookies.accessToken));
    }
  }, [cookies, dispatch]);
  const data = useSelector((store: TUserStore) => store.user.data);
  return <header>{data.id ? <SignedHeader /> : <BaseHeader />}</header>;
};
