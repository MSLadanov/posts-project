import { ReactElement, Suspense } from "react";
import "./style.scss";
import useFetch from "@hooks/useFetch";
import { Tag } from "@/types/types";

export const TagsBox = (): ReactElement => {
  const { data } = useFetch<Tag[]>("https://dummyjson.com/posts/tags");
  return <Suspense>{data.map()}</Suspense>;
};
