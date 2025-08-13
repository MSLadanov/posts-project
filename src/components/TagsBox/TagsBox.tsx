import { ReactElement } from "react";
import { TTag } from "@/types/types";
import { TagBadge } from "@ui/TagBadge";
import "./style.scss";

interface TagsBoxProps {
  getSlug: (slug: string) => void;
  tags: TTag[];
}

export const TagsBox = ({ getSlug, tags }: TagsBoxProps): ReactElement => {
  return (
    <>
      {tags && (
        <div className="tag-box">
          {" "}
          {tags.map((tag) => (
            <TagBadge
              key={tag.slug}
              slug={tag.slug}
              action={getSlug}
              tagStore={[]}
            >
              {tag.name}
            </TagBadge>
          ))}
        </div>
      )}
    </>
  );
};
