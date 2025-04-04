/* eslint-disable react-hooks/exhaustive-deps */
import useDebounce from "@/hooks/useDebounce";
import { ReactElement, useEffect, useState } from "react";

export const SearchBox = (): ReactElement => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedString = useDebounce(searchQuery, 500)
  useEffect(() => {
    if(searchQuery){
      console.log(searchQuery)
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
