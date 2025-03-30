import { fetchPosts } from "@/store/slices/PostsSlice";
import { TPostsListStore } from "@/types/types";
import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";

export const PostsListRoute = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector(
    (store: TPostsListStore) => store.posts.postsList
  );
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  if (!Array.isArray(data) || data.length === 0) {
    return <div>Нет доступных постов!.</div>;
  }
  return (
    <div>
      {/* {data.map((item) => (
        <PostsList key={item.id} id={item.id} title={item.title} />
      ))} */}
    </div>
  );
};
