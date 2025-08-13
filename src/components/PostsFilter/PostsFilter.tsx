import { ReactElement } from "react";
import { SearchBox } from "@components/SearchBox";
import { SortBox } from "@components/SortBox";
import { fetchTags } from "@/store/posts.api";
import { TagsBox } from "@components/TagsBox";
import { Grid } from "@components/ui/Grid";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../Loader";
import "./style.scss";

export const PostsFilter = (): ReactElement => {
  const {
    data: tags,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["tags"], queryFn: fetchTags });
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div className="posts-filter">
      <Grid classname="post-filter-grid">
        <SearchBox />
        <SortBox />
      </Grid>
      <TagsBox getSlug={() => {}} tags={tags} />
    </div>
  );
};
