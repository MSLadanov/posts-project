import { ReactElement } from "react";
import { TPostAppStore } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { signOut } from "@/store/slices/UserSlices";
import { AppDispatch } from "@/store";
import { NavLink, useNavigate } from "react-router";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@ui/Button";
import { useNotify } from "@/hooks/useNotify";
import { Loader } from "../Loader";

const SignedHeader = (): ReactElement => {
  const { data: user, loading } = useSelector(
    (store: TPostAppStore) => store.user
  );
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [, , removeCookie] = useCookies(["accessToken"]);
  const { notify, notifyPortal } = useNotify();
  return (
    <nav>
      {loading === "pending" ? (
        <Loader />
      ) : (
        loading === "succeeded" && (
          <>
            <img
              src={user?.image}
              alt={user?.firstName + " photo"}
              onClick={() => navigate("/me")}
            />
            <p>{`${user?.firstName + " " + user?.lastName}`}</p>
          </>
        )
      )}
      <Button
        icon={faRightFromBracket}
        action={() => {
          removeCookie("accessToken");
          dispatch(signOut());
          notify("You are successfully logged out", "success");
        }}
        payload={"signin"}
      >
        Sign Out
      </Button>
      <NavLink to={"/me"}>My Profile</NavLink>
      {notifyPortal}
    </nav>
  );
};

export default SignedHeader;
