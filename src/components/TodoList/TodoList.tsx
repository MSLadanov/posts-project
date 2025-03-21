import { ReactElement } from "react";
import { NavLink, useLocation } from "react-router";

interface ITodoListProps {
  id: number;
  title: string;
}

export const TodoList: React.FC<ITodoListProps> = ({
  id,
  title,
}): ReactElement => {
  const location = useLocation();
  return <NavLink to={`${location.pathname}/${id}`}>{title}</NavLink>;
};
