import { ReactElement } from "react";
import { SearchBox } from "@components/SearchBox";
import { SortBox } from "@components/SortBox";

export const PostsFilter = (): ReactElement => {
  return (
    <div className="posts-filter">
      <SearchBox />
      <SortBox />
    </div>
  );
};
