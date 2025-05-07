import { ReactElement, Suspense } from "react";
import useFetch from "@hooks/useFetch";
import { Tag } from "@/types/types";
import { TagBadge } from "@ui/TagBadge";
import "./style.scss";
import { Loader } from "../Loader";

export const TagsBox = (): ReactElement => {
  const { data } = useFetch<Tag[]>("https://dummyjson.com/posts/tags");
  return <Suspense fallback={<Loader/>}>{data!.map((tag) => <TagBadge>{tag.name}</TagBadge>)}</Suspense>;
};
