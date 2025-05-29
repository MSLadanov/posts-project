import useFetch from "@/hooks/useFetch";
import { ReactElement, useState, FormEvent } from "react";
import { Input } from "@ui/Input";
import { useCookies } from "react-cookie";
import { TLoggedUserCredentials } from "@/types/types";

const SignInForm = (): ReactElement => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { post } = useFetch<TLoggedUserCredentials>("https://dummyjson.com");
  const [, setCookies] = useCookies(["accessToken"]);
  const handleSignInForm = async (e: FormEvent) => {
    e.preventDefault();
    const user = await post<Partial<TLoggedUserCredentials>>("auth/login", { username: username, password });
    setCookies("accessToken", user?.accessToken);
  };
  return (
    <form onSubmit={(e) => handleSignInForm(e)}>
      <Input
        type="text"
        value={username}
        required={true}
        label="Username:"
        setValue={setUserName}
        name="username"
      />
      <Input
        type="password"
        value={password}
        required={true}
        label="Password:"
        name="password"
        setValue={setPassword}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
