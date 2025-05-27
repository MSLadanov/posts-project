import { AppDispatch } from "@/store";
import { fetchPosts, fetchTags } from "@/store/slices/PostsSlice";
import { TPostAppStore, TPost } from "@/types/types";
import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "@components/Post";
import { PostInput } from "@components/PostInput";
import { ProtectedComponent } from "@components/ProtectedComponent";

export const PostsList = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector(
    (store: TPostAppStore) => store.posts.postsList
  );
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags())
  }, [dispatch]);
  return (
    <>
      <ProtectedComponent>
        <PostInput/>
      </ProtectedComponent>
      {data.map((item: TPost) => (
        <Post key={item.id} post={item} />
      ))}
    </>
  );
};

