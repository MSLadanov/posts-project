import { ReactElement, Suspense } from "react";
import React from "react";
import { Loader } from "@/components/Loader";

export const UserPageRoute = (): ReactElement => {
  const UserPage = React.lazy(() => import("@components/UserPage/UserPage"));
  const UserPosts = React.lazy(() => import("@components/UserPosts/UserPosts"));
  return (
    <Suspense fallback={<Loader />}>
      <UserPage />
      <UserPosts />
    </Suspense>
  );
};
