import { AppDispatch } from "@/store";
import { fetchPosts, fetchTags } from "@/store/posts.api";
import { TPostAppStore, TPost } from "@/types/types";
import { ReactElement, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "@components/Post";
import { PostInput } from "@components/PostInput";
import { ProtectedComponent } from "@components/ProtectedComponent";
import './style.scss'

export const PostsList = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((store: TPostAppStore) => store.posts.postsList);
  const ref = useRef(false);
  useEffect(() => {
    if (ref.current) {
      dispatch(fetchPosts());
      dispatch(fetchTags());
    } else {
      ref.current = true;
    }
  }, [dispatch]);
  return (
    <>
      <ProtectedComponent>
        <PostInput />
      </ProtectedComponent>
      <div className="post-list">
        {data.map((item: TPost) => (
          <Post key={item.id} post={item} />
        ))}
      </div>
    </>
  );
};
