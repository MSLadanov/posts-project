/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const useCheckToken = (): { isLogged: boolean } => {
  const [cookies, , removeCookies] = useCookies(["accessToken"]);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const checkToken = async () => {
      const response = await fetch("https://dummyjson.com/user/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      });
      const user = await response.json();
      if (Object.hasOwn(user, "id")) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
        removeCookies("accessToken");
      }
    };
    checkToken();
  }, [cookies]);

  return { isLogged };
};
