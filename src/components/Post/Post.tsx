import useFetch from "@/hooks/useFetch";
import { ReactElement } from "react";
import { NavLink, useLocation } from "react-router";

interface IPostsListProps {
  id: number;
  body: string;
  userId: number
}

export const Post: React.FC<IPostsListProps> = ({
  id,
  body,
  userId
}): ReactElement => {
  const location = useLocation();
  const {data, isLoading, isError} = useFetch(`https://dummyjson.com/users/${userId}`)
  return <NavLink to={`${location.pathname}/${id}`}>{body}</NavLink>;
};