import { PropsWithChildren } from "react";

export const TagBadge = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <p>{children}</p>
    </div>
  );
};
