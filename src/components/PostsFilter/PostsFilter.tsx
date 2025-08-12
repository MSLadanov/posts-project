import { ReactElement } from "react";
import { SearchBox } from "@components/SearchBox";
import { SortBox } from "@components/SortBox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { fetchPostsByTag } from "@/store/posts.api";
import { TPostAppStore } from "@/types/types";
import { TagsBox } from "@components/TagsBox";
import { Grid } from "@components/ui/Grid";
import "./style.scss";

export const PostsFilter = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const { tag } = useSelector((state: TPostAppStore) => state.posts);
  const handleSlug = (slug: string) => {
    dispatch(fetchPostsByTag(slug));
  };
  return (
    <div className="posts-filter">
      <Grid classname="post-filter-grid">
        <SearchBox />
        <SortBox />
      </Grid>
      <TagsBox getSlug={handleSlug} tagStore={tag} />
    </div>
  );
};
