import { ReactElement } from "react";
import './style.scss'

type TTagBadgeProps = {
  children: string,
  slug: string
}

export const TagBadge = ({ children, slug } : TTagBadgeProps) : ReactElement => {
  return (
    <div className="tag-badge" onClick={() => console.log(slug)}>
      <p>{children}</p>
    </div>
  );
};
