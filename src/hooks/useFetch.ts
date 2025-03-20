import { useState } from "react";

const useFetch = async (url: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  try {
    const fetchedTodoLists = await fetch(url);
    console.log(fetchedTodoLists);
  } catch (error) {
    console.log(error);
  }
  return { data, isLoading, isError };
};

export default useFetch;
