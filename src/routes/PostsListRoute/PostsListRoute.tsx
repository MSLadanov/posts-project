import { ReactElement } from "react";
import { PostsFilter } from "@/components/PostsFilter";
import { PostsList } from "@/components/PostsList";

export const PostsListRoute = (): ReactElement => {
  return (
    <main>
      <PostsFilter />
      <PostsList />
    </main>
  );
};
