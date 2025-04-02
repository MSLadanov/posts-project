import { useEffect, useState } from "react";

const useFetch = <T> (url: string) => {
  const [data, setData] = useState<T>();
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
