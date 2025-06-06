import { TComment, TPost, TUser } from "@/types/types";
import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

const useFetch = (baseUrl: string) => {
  const { showBoundary } = useErrorBoundary();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const get = async <T> (endpoint: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/${endpoint}`);
      const data: T = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      showBoundary(error);
      setIsError(true);
    }
  };
  const post = async <T> (
    endpoint: string,
    body: Partial<TUser> | Partial<TPost>
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/${endpoint}`, {
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
  const patch = async <T> (
    endpoint: string,
    body: Partial<TUser> | Partial<TPost> | Partial<TComment>
  ) => {
    try {
      const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data : T = await response.json();
      return data;
    } catch (error) {
      showBoundary(error);
      setIsError(true);
    }
  };
  return { get, post, patch, isLoading, isError };
};

export default useFetch;
