import useFetch from "@/hooks/useFetch";
import { ReactElement } from "react";

export const TodoListsRoute = (): ReactElement => {
  const { data, isLoading, isError } = useFetch("data.json");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error!</div>;
  }
  if (!isLoading && !isError && data.length === 0) {
    return <div>No TodoLists!</div>;
  }
  return <div>TodoListsRoute</div>;
};
