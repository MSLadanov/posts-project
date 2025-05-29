/* eslint-disable react-hooks/exhaustive-deps */
import useDebounce from "@hooks/useDebounce";
import { ReactElement, useEffect, useState } from "react";
import { fetchSearchedPosts } from "@/store/posts.api";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { Input } from "@ui/Input";

export const SearchBox = (): ReactElement => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedString = useDebounce(searchQuery, 500);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchSearchedPosts(searchQuery));
    }
  }, [debouncedString]);
  return (
    <div>
      <Input type="text" value={searchQuery} setValue={setSearchQuery} label="Search post..." name="search-query" />
    </div>
  );
};
