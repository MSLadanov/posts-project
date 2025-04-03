import { ReactElement } from "react";
import { TagBadge } from "@ui/TagBadge";
import "./style.scss";

type TBadgeContainerProps = {
  tags: string[];
};

export const BadgeContainer: React.FC<TBadgeContainerProps> = ({
  tags
}): ReactElement => {
  return (
    <div className="badge-container">
      {tags.map((tag) => (
        <TagBadge>{tag}</TagBadge>
      ))}
    </div>
  );
};
