import { ReactElement, useEffect } from "react";
import { useModal } from "@hooks/useModal";
import { AuthModal } from "../AuthModal";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "@/store/slices/UserSlice";
import { AppDispatch } from "@/store";
import { TUserStore } from "@/types/types";

export const Header = (): ReactElement => {
  const { openModal, modalPortal } = useModal(AuthModal);
  const [cookies] = useCookies(["accessToken"]);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (cookies.accessToken) {
      dispatch(getCurrentUser(cookies.accessToken));
    }
  }, [cookies, dispatch]);
  const data = useSelector((store : TUserStore) => store.user.data);
  return (
    <header>
      <h1>Header</h1>
      {data.id ? (
        <h1>{data.firstName + " " + data.lastName}</h1>
      ) : (
        <button onClick={() => openModal()}>Sign In</button>
      )}

      {modalPortal}
    </header>
  );
};
