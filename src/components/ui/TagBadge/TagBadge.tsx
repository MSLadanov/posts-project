import { ReactElement } from "react";
import { useSearchParams } from "react-router";
import "./style.scss";

type TTagBadgeProps = {
  children: string;
  slug: string;
  disabled?: boolean
  action: (slug: string) => void;
};

export const TagBadge = ({
  children,
  slug,
  action,
  disabled = false, 
}: TTagBadgeProps): ReactElement => {
  const searchParams = useSearchParams()
  const sortBy = searchParams[0].get('sortBy')
  return (
    <button
      className={sortBy === slug? "tag-badge__active" : "tag-badge"}
      disabled={disabled}
      onClick={() => {
        action(slug);
      }}
    >
      <p>{children}</p>
    </button>
  );
};
