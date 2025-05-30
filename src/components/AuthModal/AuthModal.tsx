import { ReactElement, useState } from "react";
import "./style.scss";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { Button } from "../ui/Button";
import {
  faRightFromBracket,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export const AuthModal = (): ReactElement => {
  const [modalType, setModalType] = useState<"signin" | "signup">("signin");
  if (modalType === "signin") {
    return (
      <div>
        <SignInForm />
        <p>
          Don't have an account yet?
          <Button
            icon={faRightToBracket}
            action={setModalType}
            payload={"signup"}
          >
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
            icon={faRightFromBracket}
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
