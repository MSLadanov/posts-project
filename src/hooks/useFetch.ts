import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

const useFetch = <T> (url: string) => {
  const { showBoundary } = useErrorBoundary()
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
        showBoundary(error)
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);
  return { data, isLoading, isError };
};

export default useFetch;
