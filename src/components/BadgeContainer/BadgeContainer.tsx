import { ReactElement } from "react";
import { TagBadge } from "@components/ui/TagBadge";
import { useNavigate } from "react-router";
import "./style.scss";

type TBadgeContainerProps = {
  tags: string[];
};

export const BadgeContainer: React.FC<TBadgeContainerProps> = ({
  tags,
}): ReactElement => {
  const navigate = useNavigate();
  return (
    <div className="badge-container">
      {tags.map((tag, index) => (
        <TagBadge
          key={index}
          slug={tag}
          action={() => navigate(`?sortBy=${tag}`)}
        >
          {tag}
        </TagBadge>
      ))}
    </div>
  );
};
