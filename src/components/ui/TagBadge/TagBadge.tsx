import { ReactElement } from "react";
import "./style.scss";

type TTagBadgeProps = {
  children: string;
  slug: string;
  action: (slug: string) => void;
  tagStore: string[]
};

export const TagBadge = ({
  children,
  slug,
  action,
  tagStore
}: TTagBadgeProps): ReactElement => {
  return (
    <div
      className={tagStore.includes(slug) ? "tag-badge__active" : "tag-badge"}
      onClick={() => {
        action(slug);
      }}
    >
      <p>{children}</p>
    </div>
  );
};
