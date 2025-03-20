import useFetch from "@/hooks/useFetch";
import { ReactElement } from "react";

export const TodoListsRoute = (): ReactElement => {
  const {data, isLoading, isError} = useFetch("./data.json");
  return <div>TodoListsRoute</div>;
};
