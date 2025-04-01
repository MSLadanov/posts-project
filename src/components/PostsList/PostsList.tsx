import { AppDispatch } from "@/store";
import { fetchPosts } from "@/store/slices/PostsSlice";
import { TPostsListStore, TPost } from "@/types/types";
import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "@components/Post";

export const PostsList = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector(
    (store: TPostsListStore) => store.posts.postsList
  );
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  if (!Array.isArray(data) || data.length === 0) {
    return <div>Нет доступных постов!</div>;
  }
  return (
    <div>
      {data.map((item : TPost) => (
        <Post key={item.id} post={item} />
      ))}
    </div>
  );
};
