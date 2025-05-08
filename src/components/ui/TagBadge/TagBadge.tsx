import { PropsWithChildren, ReactElement } from "react";
import './style.scss'

type TTagBadgeProps = {
  children: PropsWithChildren,
  value: string
}

export const TagBadge = ({ children, value } : TTagBadgeProps) : ReactElement => {
  return (
    <div className="tag-badge" onClick={() => console.log(value)}>
      <p>{children}</p>
    </div>
  );
};
