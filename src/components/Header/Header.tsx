import { ReactElement, useEffect } from "react";
import { useModal } from "@hooks/useModal";
import { AuthModal } from "../AuthModal";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "@/store/slices/UserSlice";
import { AppDispatch } from "@/store";

export const Header = (): ReactElement => {
  const { openModal, modalPortal } = useModal(AuthModal);
  const [cookies] = useCookies(["accessToken"]);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (cookies.accessToken) {
      dispatch(getCurrentUser(cookies.accessToken));
    }
  }, [cookies, dispatch]);
  return (
    <header>
      <h1>Header</h1>
      <button onClick={() => openModal()}>Sign In</button>
      {modalPortal}
    </header>
  );
};
