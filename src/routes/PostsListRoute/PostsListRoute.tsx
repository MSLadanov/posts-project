import { ReactElement, Suspense } from "react";
import { PostsFilter } from "@/components/PostsFilter";
import React from "react";
import { Loader } from "@/components/Loader";

export const PostsListRoute = (): ReactElement => {
  const PostsList = React.lazy(() => import("@components/PostsList/PostsList"));
  return (
    <main>
      <PostsFilter />
      <Suspense fallback={<Loader />}>
        <PostsList />
      </Suspense>
    </main>
  );
};
