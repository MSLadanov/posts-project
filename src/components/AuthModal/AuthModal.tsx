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
      <Input
        type="text"
        value={userName}
        required={true}
        label="Username:"
        setValue={setUserName}
      />
      <Input
        type="password"
        value={password}
        required={true}
        label="Password:"
        setValue={setPassword}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

const SignUp = (): ReactElement => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("male");
  const handleSignUpForm = async (e: FormEvent) => {
    e.preventDefault();
    console.log({ userName, password, email, firstName, lastName, gender });
  };
  return (
    <form onSubmit={(e) => handleSignUpForm(e)}>
      <Input
        type="text"
        value={userName}
        required={true}
        label="Username:"
        setValue={setUserName}
      />
      <Input
        type="password"
        value={password}
        required={true}
        label="Password:"
        setValue={setPassword}
      />
      <Input
        type="email"
        value={email}
        required={true}
        label="E-mail:"
        setValue={setEmail}
      />
      <Input
        type="email"
        value={firstName}
        label="First name:"
        setValue={setFirstName}
      />
      <Input
        type="text"
        value={lastName}
        label="Last name"
        setValue={setLastName}
      />
      <Input type="radio" value={"male"} label="male" setValue={setGender} />
      <Input
        type="radio"
        value={"female"}
        label="female"
        setValue={setGender}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
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
