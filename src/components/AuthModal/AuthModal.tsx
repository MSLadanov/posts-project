import { FormEvent, ReactElement, useState } from "react";
import "./style.scss";
import { Input } from "@ui/Input";

const SignIn = (): ReactElement => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSignInForm = (e: FormEvent) => {
    e.preventDefault();
    console.log("form");
  };
  return (
    <form onSubmit={(e) => handleSignInForm(e)}>
      <Input type="text" value={userName} setValue={setUserName} />
      <Input type="password" value={password} setValue={setPassword} />
      <button type="submit">Sign In</button>
    </form>
  );
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
          <button onClick={() => setModalType("signup")}>Sign Up</button>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <SignUp />
        <p>
          Already have an account?
          <button onClick={() => setModalType("signin")}>Sign In</button>
        </p>
      </div>
    );
  }
};
