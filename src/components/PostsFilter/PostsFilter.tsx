import { ReactElement } from "react";
import { SearchBox } from "@components/SearchBox";
import { SortBox } from "@components/SortBox";
import { TagsBox } from "@components/TagsBox";

export const PostsFilter = (): ReactElement => {
  return (
    <div className="posts-filter">
      <SearchBox />
      <SortBox />
      <TagsBox/>
    </div>
  );
};
