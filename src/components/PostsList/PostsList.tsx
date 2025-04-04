import { AppDispatch } from "@/store";
import { fetchPosts } from "@/store/slices/PostsSlice";
import { TPostsListStore, TPost } from "@/types/types";
import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "@components/Post";
import { Container } from "@ui/Container";
import { SearchBox } from "@components/SearchBox";
import { SortBox } from "@components/SortBox";

export const PostsList = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector(
    (store: TPostsListStore) => store.posts.postsList
  );
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  if (loading === "pending") {
    return <div>Загрузка...</div>;
  }
  if (!Array.isArray(data) || data.length === 0) {
    return <div>Нет доступных постов!</div>;
  }
  return (
    <div>
      <Container>
        <SearchBox />
        <SortBox />
      </Container>
      {data.map((item: TPost) => (
        <Post key={item.id} post={item} />
      ))}
    </div>
  );
};
