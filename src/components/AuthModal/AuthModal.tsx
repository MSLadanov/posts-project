import { ReactElement, useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { Button } from "../ui/Button";
import {
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

export const AuthModal = (): ReactElement => {
  const [modalType, setModalType] = useState<"signin" | "signup">("signin");
  if (modalType === "signin") {
    return (
      <div>
        <SignInForm />
        <p>
          Don't have an account yet?
          <Button icon={faUserPlus} action={setModalType} payload={"signup"}>
            Sign Up
          </Button>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <SignUpForm />
        <p>
          Already have an account?
          <Button
            icon={faRightToBracket}
            action={setModalType}
            payload={"signin"}
          >
            Sign In
          </Button>
        </p>
      </div>
    );
  }
};
