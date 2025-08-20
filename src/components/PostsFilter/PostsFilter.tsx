import { ReactElement } from "react";
import { SearchBox } from "@components/SearchBox";
import { SortBox } from "@components/SortBox";
import { TagsBox } from "@components/TagsBox";
import { Grid } from "@components/ui/Grid";
import { useNavigate } from "react-router";
import { TTag } from "@/types/types";
import "./style.scss";

export const PostsFilter = ({ tags }: { tags: TTag[] }): ReactElement => {
  const navigate = useNavigate();
  return (
    <div className="posts-filter">
      <Grid classname="post-filter-grid">
        <SearchBox />
        <SortBox />
      </Grid>
      <TagsBox getSlug={navigate} tags={tags} />
    </div>
  );
};
