import { ReactElement, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { fetchPostById } from "@/store/posts.api";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { TPostAppStore } from "@/types/types";
import { Post } from "@components/Post";
import { Comments } from "@components/Comments";
import "./style.scss";

export const PostPage = (): ReactElement | null => {
  const { pathname } = useLocation();
  const postId = Number(pathname.split("/").at(-1));
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector(
    (store: TPostAppStore) => store.posts.post
  );
  const ref = useRef(false);
  useEffect(() => {
    if (ref.current) {
      dispatch(fetchPostById(postId));
    } else {
      ref.current = true;
    }
  }, [dispatch, postId]);
  if (loading === "succeeded") {
    return (
      <div className="post-page">
        <Post post={data!} />
        <Comments postId={postId} />
      </div>
    );
  } else {
    return null;
  }
};
