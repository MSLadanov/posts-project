/* eslint-disable react-hooks/exhaustive-deps */
import useFetch from "@/hooks/useFetch";
import { TPost, TUserStore } from "@/types/types";
import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PostCard } from "../PostCard";

export const UserPosts = (): ReactElement => {
  const { data } = useSelector((state: TUserStore) => state.user);
  const [userPosts, setUserPosts] = useState<{ posts: TPost[] }>();
  const { get } = useFetch<{ posts: TPost[] }>(`https://dummyjson.com`);
  useEffect(() => {
    const getUserPosts = async () => {
      const fetchedUserPosts = await get(`posts/user/${data.id}`);
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
          <PostCard key={post.id} post={post} link="" />
        ))}
    </div>
  );
};
