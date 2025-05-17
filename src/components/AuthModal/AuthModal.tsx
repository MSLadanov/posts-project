import { ReactElement, useState } from "react";
import "./style.scss";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export const AuthModal = (): ReactElement => {
  const [modalType, setModalType] = useState<"signin" | "signup">("signin");
  if (modalType === "signin") {
    return (
      <div>
        <SignInForm />
        <p>
          Don't have an account yet?
          <button onClick={() => setModalType("signup")}>Sign Up</button>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <SignUpForm />
        <p>
          Already have an account?
          <button onClick={() => setModalType("signin")}>Sign In</button>
        </p>
      </div>
    );
  }
};
