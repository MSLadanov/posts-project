import { TPostsList, TUser } from "@/types/types";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<TUser | TPostsList | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const fetchedData = await response.json();
        setData(fetchedData);
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
