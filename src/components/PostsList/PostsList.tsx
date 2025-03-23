import { ReactElement } from "react";
import { NavLink, useLocation } from "react-router";

interface IPostsListProps {
  id: number;
  title: string;
}

export const PostsList: React.FC<IPostsListProps> = ({
  id,
  title,
}): ReactElement => {
  const location = useLocation();
  return <NavLink to={`${location.pathname}/${id}`}>{title}</NavLink>;
};
