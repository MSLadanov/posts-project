import { ReactElement } from "react";
import { TPostsListStore } from "@/types/types";
import { TagBadge } from "@ui/TagBadge";
import { useSelector } from "react-redux";
import "./style.scss";

interface TagsBoxProps {
  getSlug: (slug: string) => void;
  tagStore: string[];
}

const TagsBox = ({ getSlug, tagStore }: TagsBoxProps): ReactElement => {
  const { data } = useSelector(
    (state: TPostsListStore) => state.posts.postsTags
  );
  return (
    <>
      {data && (
        <div className="tag-box">
          {" "}
          {data.map((tag) => (
            <TagBadge
              key={tag.slug}
              slug={tag.slug}
              action={getSlug}
              tagStore={tagStore}
            >
              {tag.name}
            </TagBadge>
          ))}
        </div>
      )}
    </>
  );
};

export default TagsBox;
