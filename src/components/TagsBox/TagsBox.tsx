import { ReactElement } from "react";
import { TPostAppStore } from "@/types/types";
import { TagBadge } from "@ui/TagBadge";
import { Loader } from "../Loader";
import "./style.scss";

interface TagsBoxProps {
  getSlug: (slug: string) => void;
  tagStore: string[];
}

export const TagsBox = ({ getSlug, tagStore }: TagsBoxProps): ReactElement => {
  // if (loading === 'pending') {
  //   return <Loader />;
  // }
  return (
    <>
      {/* {data && (
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
      )} */}
    </>
  );
};
