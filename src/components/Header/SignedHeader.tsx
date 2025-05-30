import { ReactElement } from "react";
import { TPostAppStore } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { signOut } from "@/store/slices/UserSlice";
import { AppDispatch } from "@/store";
import { NavLink, useNavigate } from "react-router";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/Button";

const SignedHeader = (): ReactElement => {
  const { data: user } = useSelector((store: TPostAppStore) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [, , removeCookie] = useCookies(["accessToken"]);
  return (
    <nav>
      <img
        src={user?.image}
        alt={user?.firstName + " photo"}
        onClick={() => navigate("/me")}
      />
      <p>{`${user?.firstName + " " + user?.lastName}`}</p>
      <Button
        icon={faRightFromBracket}
        action={() => {
          removeCookie("accessToken");
          dispatch(signOut());
        }}
        payload={"signin"}
      >
        Sign Out
      </Button>
      <NavLink to={"/me"}>My Profile</NavLink>
    </nav>
  );
};

export default SignedHeader;
