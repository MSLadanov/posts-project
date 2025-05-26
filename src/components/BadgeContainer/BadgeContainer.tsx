import { ReactElement } from "react";
import { TagBadge } from "@ui/TagBadge";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { fetchPostsByTag } from "@/store/slices/PostsSlice";
import "./style.scss";
import { TPostsListStore } from "@/types/types";

type TBadgeContainerProps = {
  tags: string[];
};

export const BadgeContainer: React.FC<TBadgeContainerProps> = ({
  tags,
}): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const { tag } = useSelector((state: TPostsListStore) => state.posts);
  const sortByTag = (slug: string) => {
    dispatch(fetchPostsByTag(slug));
  };
  return (
    <div className="badge-container">
      {tags.map((t, index) => (
        <TagBadge key={index} slug={t} action={sortByTag} tagStore={tag}>
          {t}
        </TagBadge>
      ))}
    </div>
  );
};
