import { TTodoList } from "@/types/todoTypes";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<TTodoList[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        console.log(response.ok)
        const { todoLists } = await response.json()
        console.log(todoLists)
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, isError };
};

export default useFetch;
