import { ReactElement, useState } from "react";
import { Select } from "@ui/Select";

export const SortBox = (): ReactElement => {
  const [sortBy, setSortBy] = useState('');
  return (
    <div>
      <Select options={["Likes", "Dislikes", "Views"]} setValue={setSortBy} />
    </div>
  );
};
