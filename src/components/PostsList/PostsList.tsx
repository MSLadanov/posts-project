import { AppDispatch } from "@/store";
import { fetchPosts } from "@/store/slices/PostsSlice";
import { TPostsListStore, TPost } from "@/types/types";
import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "@components/Post";
import { PostInput } from "@components/PostInput";

const PostsList = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector(
    (store: TPostsListStore) => store.posts.postsList
  );
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <>
      <PostInput />
      {data.map((item: TPost) => (
        <Post key={item.id} post={item} />
      ))}
    </>
  );
};

export default PostsList;
