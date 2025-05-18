import { TUserStore } from "@/types/types";
import { ReactElement } from "react";
import { useSelector } from "react-redux";

export const UserPage = (): ReactElement => {
  const { data } = useSelector((state: TUserStore) => state.user);
  return (
    <div>
      <img src={data.image} alt={data.firstName + " avatar"} />
      <p>{data.firstName + " " + data.maidenName + " " + data.lastName}</p>
      <p>{data.email}</p>
      <p>{data.age + " y.o."}</p>
    </div>
  );
};
