import useFetch from "@/hooks/useFetch";
import { ReactElement } from "react";

export const TodoListsRoute = (): ReactElement => {
  const {data, isLoading, isError} = useFetch("ldata.json");
  return <div>TodoListsRoute</div>;
};
