import { TPost, TPostAppStore } from "@/types/types";
import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PostCard } from "../PostCard";
import { fetchUserPosts } from "@/api/utils";

const UserPosts = (): ReactElement => {
  const { data } = useSelector((state: TPostAppStore) => state.user);
  const [userPosts, setUserPosts] = useState<TPost[] | []>();
  useEffect(() => {
    if (data.id) {
      fetchUserPosts(data.id, setUserPosts);
    }
  }, [data.id]);
  return (
    <div>
      <h3>My posts:</h3>
      {data &&
        userPosts &&
        userPosts?.map((post) => (
          <PostCard key={post.id} post={post} link={`/posts/${post.id}`} />
        ))}
    </div>
  );
};

export default UserPosts;
