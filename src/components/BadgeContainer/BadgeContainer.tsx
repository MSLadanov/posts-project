import { ReactElement } from "react";
import { TagBadge } from "@ui/TagBadge";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { fetchPostsByTag } from "@/store/slices/PostsSlice";
import "./style.scss";

type TBadgeContainerProps = {
  tags: string[];
};

export const BadgeContainer: React.FC<TBadgeContainerProps> = ({
  tags,
}): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const sortByTag = (slug: string) => {
    dispatch(fetchPostsByTag(slug));
  };
  return (
    <div className="badge-container">
      {tags.map((tag, index) => (
        <TagBadge key={index} slug={tag} action={sortByTag}>
          {tag}
        </TagBadge>
      ))}
    </div>
  );
};
