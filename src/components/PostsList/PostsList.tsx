import { TPost } from "@/types/types";
import { ReactElement } from "react";
import { Post } from "@components/Post";
import { PostInput } from "@components/PostInput";
import { ProtectedComponent } from "@components/ProtectedComponent";
import "./style.scss";

export const PostsList = ({posts} : {posts: TPost[]}): ReactElement => {
  return (
    <>
      <ProtectedComponent>
        <PostInput />
      </ProtectedComponent>
      <div className="post-list">
        {posts?.map((item: TPost) => (
          <Post key={item.id} post={item} />
        ))}
      </div>
    </>
  );
};
