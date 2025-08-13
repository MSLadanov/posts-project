import { ReactElement } from "react";
import { useLocation } from "react-router";
import { fetchPostById } from "@/api/posts.api";
import { Post } from "@components/Post";
import { Comments } from "@components/Comments";
import { Loader } from "../Loader";
import { useQuery } from "@tanstack/react-query";
import "./style.scss";

export const PostPage = (): ReactElement => {
  const { pathname } = useLocation();
  const postId = Number(pathname.split("/").at(-1));
  const {
    data: post,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["post"], queryFn: () => fetchPostById(postId) });
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div className="post-page">
      <Post post={post} />
      <Comments postId={postId} />
    </div>
  );
};
