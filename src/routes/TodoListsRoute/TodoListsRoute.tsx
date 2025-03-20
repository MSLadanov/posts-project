import useFetch from "@/hooks/useFetch";
import { ReactElement } from "react";

export const TodoListsRoute = (): ReactElement => {
  const {data, isLoading, isError} = useFetch("data.json");
  console.log('render', {data, isLoading, isError})
  return <div>TodoListsRoute</div>;
};
