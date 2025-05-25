import React, { ReactElement, Suspense } from "react";
import { SearchBox } from "@components/SearchBox";
import { SortBox } from "@components/SortBox";
import { Loader } from "../Loader";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { fetchPostsByTag } from "@/store/slices/PostsSlice";

export const PostsFilter = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const TagsBox = React.lazy(() => import("@components/TagsBox/TagsBox"));
  const handleSlug = (slug: string) => {
    dispatch(fetchPostsByTag(slug));
  };
  return (
    <div className="posts-filter">
      <SearchBox />
      <SortBox />
      <Suspense fallback={<Loader />}>
        <TagsBox getSlug={handleSlug} />
      </Suspense>
    </div>
  );
};
