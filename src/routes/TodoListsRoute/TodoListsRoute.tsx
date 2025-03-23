import { fetchTodos } from "@/store/slices/TodoSlice";
import { TTodoListsStore } from "@/types/todoTypes";
import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { TodoList } from "@/components/TodoList";

export const TodoListsRoute = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector(
    (store: TTodoListsStore) => store.todo.todoLists
  );
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div>
      {data.map((item) => (
        <TodoList key={item.id} id={item.id} title={item.title} />
      ))}
    </div>
  );
};
