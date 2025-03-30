import { ReactElement } from "react";
import { NavLink, useLocation } from "react-router";

interface IPostsListProps {
  id: number;
  body: string;
}

export const PostsList: React.FC<IPostsListProps> = ({
  id,
  body,
}): ReactElement => {
  console.log(id)
  const location = useLocation();
  return <NavLink to={`${location.pathname}${id}`}>{body}</NavLink>;
};
