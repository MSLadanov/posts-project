import { fetchTodos } from "@/store/slices/TodoSlice";
import { TTodoList, TTodoListsStore } from "@/types/todoTypes";
import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AppDispatch } from "@/store";
import { TodoList } from "@/components/TodoList";

export const TodoListsRoute = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const { todoLists } = useSelector((store: TTodoListsStore) => store.todo);
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div>
      {todoLists.map((item) => (
        <TodoList key={item.id} id={item.id} title={item.title} />
      ))}
    </div>
  );
};
