/* eslint-disable react-hooks/exhaustive-deps */
import useDebounce from "@hooks/useDebounce";
import { ReactElement, useEffect, useState } from "react";
import { fetchSearchedPosts } from "@store/slices/PostsSlice";

export const SearchBox = (): ReactElement => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedString = useDebounce(searchQuery, 500)
  useEffect(() => {
    if(searchQuery){
      fetchSearchedPosts(searchQuery)
    }
  }, [debouncedString])
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
    </div>
  );
};
