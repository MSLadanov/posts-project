import { ReactElement, Suspense } from "react";
import { SearchBox } from "@components/SearchBox";
import { SortBox } from "@components/SortBox";
import React from "react";
import { Loader } from "../Loader";

export const PostsFilter = (): ReactElement => {
  const TagsBox = React.lazy(() => import("@components/TagsBox/TagsBox"));
  return (
    <div className="posts-filter">
      <SearchBox />
      <SortBox />
      <Suspense fallback={<Loader/>}>
        <TagsBox />
      </Suspense>
    </div>
  );
};
