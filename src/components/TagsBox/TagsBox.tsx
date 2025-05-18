/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useEffect, useState } from "react";
import useFetch from "@hooks/useFetch";
import { TTag } from "@/types/types";
import { TagBadge } from "@ui/TagBadge";
import "./style.scss";

export const TagsBox = (): ReactElement => {
  const [data, setData] = useState<TTag[]>();
  const { get } = useFetch<TTag[]>("https://dummyjson.com");
  useEffect(() => {
    const getAllTags = async () => {
      const tags = await get("posts/tags");
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
            <TagBadge key={tag.slug} slug={tag.slug}>
              {tag.name}
            </TagBadge>
          ))}
        </div>
      )}
    </>
  );
};
