import { TPost, TUser } from "@/types/types";
import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

const useFetch = <T>(baseUrl: string) => {
  const { showBoundary } = useErrorBoundary();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const get = async (endpoing: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/${endpoing}`);
      const data: T = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      showBoundary(error);
      setIsError(true);
    }
  };
  const post = async (
    endpoing: string,
    body: Partial<TUser> | Partial<TPost>
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/${endpoing}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(body),
      });
      const data: T = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      showBoundary(error);
      setIsError(true);
    }
  };
  return { get, post, isLoading, isError };
};

export default useFetch;
