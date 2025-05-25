import { ReactElement } from "react";
import { fetchPostsByTag } from "@/store/slices/PostsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import "./style.scss";

type TTagBadgeProps = {
  children: string;
  slug: string;
  action: (payload? : string | object) => void;
  payload?: string | object
};

export const TagBadge = ({ children, slug, action, payload }: TTagBadgeProps): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="tag-badge" onClick={() => payload ? action(payload) : action()}>
      <p>{children}</p>
    </div>
  );
};
