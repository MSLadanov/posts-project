import { ReactElement } from "react";
import { TPostAppStore } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { signOut } from "@/store/slices/UserSlice";
import { AppDispatch } from "@/store";
import { NavLink } from "react-router";

const SignedHeader = (): ReactElement => {
  const {data : user} = useSelector((store: TPostAppStore) => store.user);
  const dispatch = useDispatch<AppDispatch>();
  const [, , removeCookie] = useCookies(["accessToken"]);
  const SignOut = () => {
    removeCookie("accessToken");
    dispatch(signOut());
  };
  return (
    <nav>
      <img src={user.image} alt={user.firstName + ' photo'} />
      <p>{`${user.firstName + ' ' + user.lastName}`}</p>
      <button onClick={() => SignOut()}>Sign Out</button>
      <NavLink to={'/me'}>My Profile</NavLink>
    </nav>
  );
};

export default SignedHeader;
