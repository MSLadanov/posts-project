import useFetch from "@/hooks/useFetch";
import { TPost } from "@/types/types";
import { ReactElement } from "react";
import { NavLink, useLocation } from "react-router";

interface IPostsListProps {
  post: TPost;
}

export const Post: React.FC<IPostsListProps> = ({ post }): ReactElement  => {
  const location = useLocation();
  const { data, isLoading, isError } = useFetch(
    `https://dummyjson.com/users/${post.userId}`
  );
  if (isLoading && !isError) {
    return <div>Загрузка...</div>;
  }
  if (isError && !isLoading) {
    return <div>Ошибка!</div>;
  } else {
    return <div>Post</div>;
  }
};
