import { PropsWithChildren, ReactElement } from "react";
import './style.scss'

export const TagBadge = ({ children } : PropsWithChildren) : ReactElement => {
  return (
    <div className="tag-badge">
      <p>{children}</p>
    </div>
  );
};
