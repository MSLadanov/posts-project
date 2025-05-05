import useFetch from "@/hooks/useFetch";
import { TPost, TUser } from "@/types/types";
import { ReactElement } from "react";
import { useLocation } from "react-router";
import { PostCard } from "@components/PostCard";

interface IPostsListProps {
  post: TPost;
}

export const Post: React.FC<IPostsListProps> = ({ post }): ReactElement => {
  const location = useLocation();
  return (
      <PostCard
        link={`${location.pathname}/${post.id}`}
        post={post}
      />
  );
};
