import { ReactElement, Suspense } from "react";
import React from "react";
import { Loader } from "@/components/Loader";

const UserPageRoute = (): ReactElement => {
  const UserPage = React.lazy(() => import("@components/UserPage/UserPage"));
  const UserPosts = React.lazy(() => import("@components/UserPosts/UserPosts"));
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <UserPage />
        <UserPosts />
      </Suspense>
    </main>
  );
};

export default UserPageRoute;
