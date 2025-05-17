import { FormEvent, ReactElement, useState } from "react";
import "./style.scss";
import { Input } from "@ui/Input";
import useFetch from "@/hooks/useFetch";

const SignIn = (): ReactElement => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { post } = useFetch("https://dummyjson.com");
  const handleSignInForm = async (e: FormEvent) => {
    e.preventDefault();
    const user = await post("auth/login", { username: userName, password });
    console.log(user);
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
  return <form>Sign Up</form>;
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
