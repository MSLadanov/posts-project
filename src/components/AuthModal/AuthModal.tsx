import { ReactElement, useState } from "react";
import "./style.scss";

const SignIn = (): ReactElement => {
  return <div>Sign In</div>;
};

const SignUp = (): ReactElement => {
  return <div>Sign Up</div>;
};

export const AuthModal = (): ReactElement => {
  const [modalType, setModalType] = useState<"signin" | "signup">("signin");
  if (modalType === "signin") {
    return (
      <div>
        <SignIn />
        <p>
          Don't have an account yet?
          <button>Sign Up</button>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <SignUp />
        <p>
          Already have an account?<button>Sign In</button>
        </p>
      </div>
    );
  }
};
