import { ReactElement } from "react";
import { fetchPostsByTag } from "@/store/slices/PostsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import "./style.scss";

type TTagBadgeProps = {
  children: string;
  slug: string;
  action: (slug: string) => void
};

export const TagBadge = ({ children, slug, action }: TTagBadgeProps): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="tag-badge" onClick={() => action(slug)}>
      <p>{children}</p>
    </div>
  );
};
