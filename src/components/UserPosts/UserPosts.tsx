/* eslint-disable react-hooks/exhaustive-deps */
import useFetch from "@/hooks/useFetch";
import { TPost, TPostAppStore } from "@/types/types";
import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PostCard } from "../PostCard";
import { fetchImage } from "@/store/slices/utils";

const UserPosts = (): ReactElement => {
  const { data } = useSelector((state: TPostAppStore) => state.user);
  const [userPosts, setUserPosts] = useState<{ posts: TPost[] }>();
  const { get } = useFetch<{ posts: TPost[] }>(`https://dummyjson.com`);
  useEffect(() => {
    const getUserPosts = async () => {
      try {
        const fetchedUserPosts = await get<{ posts: TPost[] }>(
          `posts/user/${data.id}`
        );
        if (!fetchedUserPosts) {
          setUserPosts({ posts: [] });
          return;
        }
        const postsWithImages = await Promise.all(
          fetchedUserPosts.posts.map(async (post: TPost) => ({
            ...post,
            rated: false,
            rate: null,
            postImage: await fetchImage(post.title),
          }))
        );
        setUserPosts({ posts: postsWithImages });
      } catch (error) {
        console.error("Error fetching user posts:", error);
        setUserPosts({ posts: [] });
      }
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
