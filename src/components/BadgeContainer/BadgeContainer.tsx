import { ReactElement } from "react";
import { TagBadge } from "@ui/TagBadge";
import "./style.scss";

type TBadgeContainerProps = {
  tags: string[];
};

export const BadgeContainer: React.FC<TBadgeContainerProps> = ({
  tags,
}): ReactElement => {
  const sortByTag = () => {
    return ''
  }
  return (
    <div className="badge-container">
      {tags.map((tag, index) => (
        <TagBadge key={index} slug={tag} getSlug={sortByTag}>{tag}</TagBadge>
      ))}
    </div>
  );
};
