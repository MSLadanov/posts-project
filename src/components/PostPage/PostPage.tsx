/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement, useEffect } from "react";
import { useLocation } from "react-router";
import { fetchPostById } from "@/store/slices/PostsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { TPostsListStore } from "@/types/types";
import { Post } from "@components/Post";
import { Comments } from "@components/Comments";
import "./style.scss";
import { Loader } from "@components/Loader";

export const PostPage = (): ReactElement | null => {
  const { pathname } = useLocation();
  const postId = Number(pathname.split("/").at(-1));
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector(
    (store: TPostsListStore) => store.posts.post
  );
  useEffect(() => {
    dispatch(fetchPostById(postId));
  }, [dispatch, postId]);
  if (loading === "failed") {
    return <div>Ошибка!</div>;
  }
  if (loading === "pending") {
    return <Loader />;
  }
  if (loading === "succeeded") {
    return (
      <div className="post-page">
        <Post post={data!} />
        <Comments postId={postId}/>
      </div>
    );
  } else {
    return null;
  }
};
