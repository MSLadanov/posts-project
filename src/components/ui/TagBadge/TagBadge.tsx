import { ReactElement } from "react";
import "./style.scss";

type TTagBadgeProps = {
  children: string;
  slug: string;
  action: (slug: string) => void
};

export const TagBadge = ({ children, slug, action }: TTagBadgeProps): ReactElement => {
  return (
    <div className="tag-badge" onClick={() => action(slug)}>
      <p>{children}</p>
    </div>
  );
};
