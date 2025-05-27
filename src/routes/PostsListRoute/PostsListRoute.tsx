import { ReactElement } from "react";
import { PostsFilter } from "@/components/PostsFilter";
import PostsList from "@/components/PostsList/PostsList";

export const PostsListRoute = (): ReactElement => {
  return (
    <main>
      <PostsFilter />
      <PostsList />
    </main>
  );
};
