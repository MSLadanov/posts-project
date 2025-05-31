import { ReactElement, useState, FormEvent } from "react";
import { Input } from "@ui/Input";
import useFetch from "@hooks/useFetch";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/Button";

const SignUpForm = (): ReactElement => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const { post } = useFetch("https://dummyjson.com");
  const handleSignUpForm = async (e: FormEvent) => {
    e.preventDefault();
    const user = await post("users/add", {
      username,
      password,
      email,
      firstName,
      lastName,
      gender,
    });
    console.log(user);
  };
  return (
    <form onSubmit={(e) => handleSignUpForm(e)}>
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
        setValue={setPassword}
        name="password"
      />
      <Input
        type="email"
        value={email}
        required={true}
        label="E-mail:"
        setValue={setEmail}
        name="email"
      />
      <Input
        type="text"
        value={firstName}
        label="First name:"
        setValue={setFirstName}
        name="firstname"
      />
      <Input
        type="text"
        value={lastName}
        label="Last name"
        setValue={setLastName}
        name="lastname"
      />
      <Input
        type="radio"
        value={gender}
        label="Male"
        isChecked={gender === 'male'}
        setValue={() => setGender('male')}
        name="male"
      />
      <Input
        type="radio"
        value={gender}
        label="Female"
        isChecked={gender === 'female'}
        setValue={() => setGender('female')}
        name="female"
      />
      <Button icon={faUserPlus} attributes={{ type: "submit" }}>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
