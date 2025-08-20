import { ReactElement } from "react";
import { PostsFilter } from "@/components/PostsFilter";
import { PostsList } from "@/components/PostsList";
import { fetchPosts, fetchTags } from "@/api/posts.api";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

const PostsListRoute = (): ReactElement => {
  const searchParams = useSearchParams();
  const sortBy = searchParams[0].get("sortBy");
  const orderBy = searchParams[0].get("orderBy");
  const {
    data: tags,
    isLoading: isTagsLoading,
    isError: isTagsError,
  } = useQuery({ queryKey: ["tags"], queryFn: fetchTags });
  const {
    data: posts,
    isLoading: isPostsLoading,
    isError: isPostsError,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(sortBy, orderBy),
  });
  return (
    <main>
      <PostsFilter tags={tags} />
      <PostsList posts={posts} />
    </main>
  );
};

export default PostsListRoute;
