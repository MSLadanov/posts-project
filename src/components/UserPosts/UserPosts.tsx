/* eslint-disable react-hooks/exhaustive-deps */
import useFetch from "@/hooks/useFetch";
import { TPost, TUserStore } from "@/types/types";
import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PostCard } from "../PostCard";

const UserPosts = (): ReactElement => {
  const { data } = useSelector((state: TUserStore) => state);
  const [userPosts, setUserPosts] = useState<{ posts: TPost[] }>();
  const { get } = useFetch<{ posts: TPost[] }>(`https://dummyjson.com`);
  useEffect(() => {
    const getUserPosts = async () => {
      const fetchedUserPosts = await get<{ posts: TPost[] }>(
        `posts/user/${data.id}`
      );
      setUserPosts(fetchedUserPosts);
    };
    if (data.id) {
      getUserPosts();
    }
  }, [data.id]);
  return (
    <div>
      {data &&
        userPosts &&
        userPosts?.posts.map((post) => (
          <PostCard key={post.id} post={post} link={`/posts/${post.id}`} />
        ))}
    </div>
  );
};

export default UserPosts;
