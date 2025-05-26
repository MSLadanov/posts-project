import { ReactElement } from "react";
import { TagBadge } from "@ui/TagBadge";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { fetchPostsByTag } from "@/store/slices/PostsSlice";
import "./style.scss";

type TBadgeContainerProps = {
  tags: string[];
  tagsStore: string[];
};

export const BadgeContainer: React.FC<TBadgeContainerProps> = ({
  tags,
  tagsStore,
}): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const sortByTag = (slug: string) => {
    dispatch(fetchPostsByTag(slug));
  };
  return (
    <div className="badge-container">
      {tags.map((t, index) => (
        <TagBadge key={index} slug={t} action={sortByTag} tagStore={tagsStore}>
          {t}
        </TagBadge>
      ))}
    </div>
  );
};
