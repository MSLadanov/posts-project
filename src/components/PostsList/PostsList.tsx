import { AppDispatch } from "@/store";
import { fetchPosts } from "@/store/slices/PostsSlice";
import { TPostsListStore, TPost } from "@/types/types";
import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IPostsListProps {
  id: number;
  body: string;
}

export const PostsList: React.FC<IPostsListProps> = ({
  id,
  body,
}): ReactElement => {
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
      {data.map((item : TPost) => (
        <PostsList key={item.id} id={item.id} body={item.title} />
      ))}
    </div>
  );
};
