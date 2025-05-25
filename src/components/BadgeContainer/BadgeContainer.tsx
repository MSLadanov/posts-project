import { ReactElement } from "react";
import { TagBadge } from "@ui/TagBadge";
import "./style.scss";

type TBadgeContainerProps = {
  tags: string[];
};

export const BadgeContainer: React.FC<TBadgeContainerProps> = ({
  tags,
}): ReactElement => {
  const sortByTag = (slug: string) => {
    console.log(slug)
  }
  return (
    <div className="badge-container">
      {tags.map((tag, index) => (
        <TagBadge key={index} slug={tag} action={sortByTag}>{tag}</TagBadge>
      ))}
    </div>
  );
};
