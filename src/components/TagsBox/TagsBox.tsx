import { ReactElement, Suspense } from "react";
import useFetch from "@hooks/useFetch";
import { Tag } from "@/types/types";
import { TagBadge } from "@ui/TagBadge";
import { Loader } from "../Loader";
import "./style.scss";

export const TagsBox = (): ReactElement => {
  const { data } = useFetch<Tag[]>("https://dummyjson.com/posts/tags");
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
};
