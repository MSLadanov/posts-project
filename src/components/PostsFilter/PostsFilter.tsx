import { ReactElement } from "react";
import { SearchBox } from "@components/SearchBox";
import { SortBox } from "@components/SortBox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { fetchPostsByTag } from "@/store/slices/PostsSlice";
import { TPostAppStore } from "@/types/types";
import { TagsBox } from "@components/TagsBox";

export const PostsFilter = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const { tag } = useSelector((state: TPostAppStore) => state.posts);
  const handleSlug = (slug: string) => {
    dispatch(fetchPostsByTag(slug));
  };
  return (
    <div className="posts-filter">
      <SearchBox />
      <SortBox />
      <TagsBox getSlug={handleSlug} tagStore={tag} />
    </div>
  );
};
