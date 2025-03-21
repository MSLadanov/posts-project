import { TodoListsState } from "@/types/todoTypes";
import { ReactElement } from "react";
import { useSelector } from "react-redux";

export const TodoListsRoute = (): ReactElement => {
  const todoLists = useSelector((state : TodoListsState) => state.todoLists)
  console.log(todoLists)
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
