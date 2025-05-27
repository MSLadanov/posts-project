import { ReactElement } from "react";
import { TPostAppStore } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { signOut } from "@/store/slices/UserSlice";
import { AppDispatch } from "@/store";

const SignedHeader = (): ReactElement => {
  const data = useSelector((store: TPostAppStore) => store.user.data);
  const dispatch = useDispatch<AppDispatch>();
  const [, , removeCookie] = useCookies(["accessToken"]);
  const SignOut = () => {
    removeCookie("accessToken");
    dispatch(signOut());
  };
  return (
    <div>
      <h1>Hello, {data.firstName}</h1>
      <button onClick={() => SignOut()}>Sign Out</button>
    </div>
  );
};

export default SignedHeader;
