import { ReactElement, useEffect } from "react";
import { useLocation } from "react-router";
import { fetchPostById } from "@/store/slices/PostsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { TPostsListStore } from "@/types/types";
import "./style.scss";

export const PostPage = (): ReactElement => {
  const { pathname } = useLocation();
  const postId = Number(pathname.split("/").at(-1));
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector(
    (store: TPostsListStore) => store.posts.post
  );
  useEffect(() => {
    dispatch(fetchPostById(postId));
    console.log(data);
  }, [dispatch, postId]);
  return <div>Post Page</div>;
};
