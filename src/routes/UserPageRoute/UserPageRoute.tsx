import { UserPosts } from "@components/UserPosts";
import { UserPage } from "@components/UserPage";
import { ReactElement } from "react";

export const UserPageRoute = (): ReactElement => {
  return (
    <div>
      <UserPage />
      <UserPosts />
    </div>
  );
};
