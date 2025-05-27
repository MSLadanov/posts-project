import React, { ReactElement, Suspense } from "react";
import { SearchBox } from "@components/SearchBox";
import { SortBox } from "@components/SortBox";
import { Loader } from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { fetchPostsByTag } from "@/store/slices/PostsSlice";
import { TPostsListStore } from "@/types/types";

export const PostsFilter = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const TagsBox = React.lazy(() => import("@components/TagsBox/TagsBox"));
  const { tag } = useSelector((state: TPostsListStore) => state.posts);
  const handleSlug = (slug: string) => {
    dispatch(fetchPostsByTag(slug));
  };
  return (
    <div className="posts-filter">
      <Suspense fallback={<Loader />}>
      <SearchBox />
      <SortBox />
        <TagsBox getSlug={handleSlug} tagStore={tag} />
      </Suspense>
    </div>
  );
};
