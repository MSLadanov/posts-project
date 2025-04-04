import { ReactElement, useEffect, useState } from "react";
import { Select } from "@ui/Select";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { sort } from "@/store/slices/PostsSlice";
import './style.scss'

export const SortBox = (): ReactElement => {
  const [sortBy, setSortBy] = useState('');
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(sort(sortBy))
  }, [sortBy, dispatch])
  return (
    <div>
      <Select options={["Likes", "Dislikes", "Views"]} value={sortBy} setValue={setSortBy} />
    </div>
  );
};
