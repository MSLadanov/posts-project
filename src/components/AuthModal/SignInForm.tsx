import useFetch from "@/hooks/useFetch";
import { ReactElement, useState, FormEvent } from "react";
import { Input } from "@ui/Input";

const SignInForm = (): ReactElement => {
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

export default SignInForm;
