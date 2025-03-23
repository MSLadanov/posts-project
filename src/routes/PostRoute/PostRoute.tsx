import { AppDispatch } from "@/store";
import { fetchTodoListById } from "@/store/slices/TodoSlice";
import { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";

export const PostRoute = (): ReactElement => {
  const { pathname } = useLocation();
  const id = Number(pathname.split("/").at(-1));
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchTodoListById(id));
  }, [id, dispatch]);
  return <div>TodosRoute</div>;
};
