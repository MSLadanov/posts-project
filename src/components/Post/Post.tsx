import useFetch from "@/hooks/useFetch";
import { TPost, TUser } from "@/types/types";
import { ReactElement } from "react";
import { useLocation } from "react-router";
import { PostCard } from "@components/PostCard";
import { Loader } from "@components/Loader";

interface IPostsListProps {
  post: TPost;
}

export const Post: React.FC<IPostsListProps> = ({ post }): ReactElement => {
  const location = useLocation();
  const { data, isLoading, isError } = useFetch<TUser>(
    `https://dummyjson.com/users/${post.userId}`
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Ошибка при загрузке пользователя!</div>;
  }
  if (!data) {
    return <div>Пользователь не найден.</div>;
  }

  return (
    <PostCard
      firstname={data.firstName}
      lastName={data.lastName}
      image={data.image}
      link={`${location.pathname}/${post.id}`}
      post={post}
    />
  );
};