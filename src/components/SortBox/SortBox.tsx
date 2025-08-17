import { ReactElement } from "react";
import { Select } from "@ui/Select";
import { useNavigate, useSearchParams } from "react-router";
import "./style.scss";

export const SortBox = (): ReactElement => {
  const navigate = useNavigate();
  const searchParams = useSearchParams();
  const sortBy = searchParams[0].get("sortBy");
  const handleOrderOption = (option: string) => {
    sortBy
      ? navigate(`?sortBy=${sortBy}&orderBy=${option}`)
      : navigate(`?orderBy=${option}`);
  };
  return (
    <div>
      <Select
        options={["reactions", "views"]}
        defaultValue="Sort by:"
        onChange={handleOrderOption}
      />
    </div>
  );
};
