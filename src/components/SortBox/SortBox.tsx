import { ReactElement } from "react";
import { Select } from "@ui/Select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./style.scss";
import { TPost } from "@/types/types";

export const SortBox = (): ReactElement => {
  const queryClient = useQueryClient();
  const handleSortByChange = async (option: string) => {
    console.log(option)
    const posts: TPost[] = queryClient.getQueryData(["posts"]) || [];
    switch (option) {
      case "Likes":
        return posts.sort(
          (a: TPost, b: TPost) => b.reactions.likes - a.reactions.likes
        );
      case "Dislikes":
        return posts.sort(
          (a: TPost, b: TPost) => b.reactions.dislikes - a.reactions.dislikes
        );
      case "Views":
        return posts.sort((a: TPost, b: TPost) => b.views - a.views);
      default:
        return posts;
    }
  };
  const { mutate: orderedBy } = useMutation({
    mutationKey: ["posts"],
    mutationFn: handleSortByChange,
    onSuccess: (orderedPosts) => {
      console.log(orderedPosts)
      queryClient.setQueryData(["posts"], orderedPosts);
    },
  });
  return (
    <div>
      <Select
        options={["Likes", "Dislikes", "Views"]}
        defaultValue="Sort by:"
        onChange={orderedBy}
      />
    </div>
  );
};
