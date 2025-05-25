/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useEffect, useState } from "react";
import useFetch from "@hooks/useFetch";
import { TTag } from "@/types/types";
import { TagBadge } from "@ui/TagBadge";
import "./style.scss";

interface TagsBoxProps {
  getSlug: () => string;
}

const TagsBox = ({ getSlug }: TagsBoxProps): ReactElement => {
  const [data, setData] = useState<TTag[]>();
  const { get } = useFetch<TTag[]>("https://dummyjson.com");
  const sortByTag = () => {
    return ''
  };
  useEffect(() => {
    const getAllTags = async () => {
      const tags = await get<TTag[]>("posts/tags");
      setData(tags);
    };
    getAllTags();
  }, []);
  return (
    <>
      {data && (
        <div className="tag-box">
          {" "}
          {data.map((tag) => (
            <TagBadge key={tag.slug} slug={tag.slug} getSlug={getSlug}>
              {tag.name}
            </TagBadge>
          ))}
        </div>
      )}
    </>
  );
};

export default TagsBox;
