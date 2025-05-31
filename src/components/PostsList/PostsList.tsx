import { AppDispatch } from "@/store";
import { fetchPosts, fetchTags } from "@/store/posts.api";
import { TPostAppStore, TPost } from "@/types/types";
import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "@components/Post";
import { PostInput } from "@components/PostInput";
import { ProtectedComponent } from "@components/ProtectedComponent";
import { Loader } from "../Loader";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

export const PostsList = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector(
    (store: TPostAppStore) => store.posts.postsList
  );
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, [dispatch]);
  if (loading === "pending") {
    return <Loader />;
  }
  if (loading === "succeeded" && data.length === 0) {
    return (
      <div className="no-posts">
        <FontAwesomeIcon icon={faFaceFrown} />
        <h2>No posts!</h2>
      </div>
    );
  }
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
