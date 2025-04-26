import { ReactElement } from "react";
import { PostsList } from "@/components/PostsList";
import { PostsFilter } from "@/components/PostsFilter";

export const PostsListRoute = (): ReactElement => {
  return (
    <main>
      <PostsFilter />
      <PostsList />
    </main>
  );
};
