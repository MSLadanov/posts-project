import { ReactElement, useEffect } from "react";
import { useLocation } from "react-router";
import { fetchPostById } from "@/store/slices/PostsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";

export const PostPage = (): ReactElement => {
  const { pathname } = useLocation();
  const postId = Number(pathname.split("/").at(-1));
  const dispatch = useDispatch<AppDispatch>();
  const {} = useSelector()
  useEffect(() => {
    dispatch(fetchPostById(postId));
  }, [dispatch, postId]);
  return <div>Post Page</div>;
};
