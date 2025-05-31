import useFetch from "@/hooks/useFetch";
import { ReactElement, useState, FormEvent } from "react";
import { Input } from "@ui/Input";
import { useCookies } from "react-cookie";
import { TLoggedUserCredentials } from "@/types/types";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/Button";
import { useNotify } from "@/hooks/useNotify";

const SignInForm = (): ReactElement => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { post } = useFetch("https://dummyjson.com");
  const [, setCookies] = useCookies(["accessToken"]);
  const { notify, notifyPortal } = useNotify();
  const handleSignInForm = async (e: FormEvent) => {
    e.preventDefault();
    const user = await post<Partial<TLoggedUserCredentials>>("auth/login", {
      username: username,
      password,
    });
    if (user?.accessToken) {
      setCookies("accessToken", user?.accessToken);
    } else {
      notify("Wrong credentials!", "error");
    }
  };
  return (
    <>
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
        <Button icon={faRightToBracket} attributes={{ type: "submit" }}>
          Sign In
        </Button>
      </form>
      <>{notifyPortal}</>
    </>
  );
};

export default SignInForm;
