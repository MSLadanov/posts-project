import { ReactElement, useEffect, useState } from "react";
import { Select } from "@ui/Select";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import "./style.scss";

export const SortBox = (): ReactElement => {
  const [sortBy, setSortBy] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    console.log(sortBy)
  }, [sortBy, dispatch]);
  return (
    <div>
      <Select
        options={["Likes", "Dislikes", "Views"]}
        defaultValue="Sort by:"
        setValue={setSortBy}
      />
    </div>
  );
};
