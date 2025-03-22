import { fetchTodos } from "@/store/slices/TodoSlice";
import { TodoListsState } from "@/types/todoTypes";
import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AppDispatch } from "@/store";

export const TodoListsRoute = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div>
      {/* {todoLists.map((item) => (
        <TodoList
          key={item.id}
          id={item.id}
          title={item.title}
        />
      ))} */}
    </div>
  );
};
