import { ReactElement } from "react";
import "./style.scss";

type TTagBadgeProps = {
  children: string;
  slug: string;
  disabled?: boolean
  action: (slug: string) => void;
  tagStore: string[]
};

export const TagBadge = ({
  children,
  slug,
  action,
  disabled = false, 
  tagStore
}: TTagBadgeProps): ReactElement => {
  return (
    <button
      className={tagStore.includes(slug) ? "tag-badge__active" : "tag-badge"}
      disabled={disabled}
      onClick={() => {
        action(slug);
      }}
    >
      <p>{children}</p>
    </button>
  );
};
