import { TTodoList } from "@/types/todoTypes";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<TTodoList[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const { todoLists } = await response.json();
        setData(todoLists);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);
  return { data, isLoading, isError };
};

export default useFetch;
