import { fetchTodos } from "@/store/slices/TodoSlice";
import { TTodoListsStore } from "@/types/types";
import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { PostsList } from "@/components/PostsList";

export const PostsListRoute = (): ReactElement => {
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
        <PostsList key={item.id} id={item.id} title={item.title} />
      ))}
    </div>
  );
};
