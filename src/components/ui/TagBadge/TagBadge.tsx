import { ReactElement } from "react";
import { fetchPostsByTag } from "@/store/slices/PostsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import "./style.scss";

type TTagBadgeProps = {
  children: string;
  slug: string;
};

export const TagBadge = ({ children, slug }: TTagBadgeProps): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="tag-badge" onClick={() => dispatch(fetchPostsByTag(slug))}>
      <p>{children}</p>
    </div>
  );
};
