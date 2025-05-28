import { PostPage } from "@/components/PostPage";
import { AppDispatch } from "@/store";
import { fetchPostById } from "@/store/posts.api";
import { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";

const PostRoute = (): ReactElement => {
  const { pathname } = useLocation();
  const id = Number(pathname.split("/").at(-1));
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (typeof id !== "number") {
      dispatch(fetchPostById(id));
    }
  }, [id, dispatch]);
  return (
    <main>
      <PostPage />
    </main>
  );
};

export default PostRoute