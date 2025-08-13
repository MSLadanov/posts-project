import { fetchPosts } from "@/store/posts.api";
import { TPost } from "@/types/types";
import { ReactElement } from "react";
import { Post } from "@components/Post";
import { PostInput } from "@components/PostInput";
import { ProtectedComponent } from "@components/ProtectedComponent";
import { Loader } from "../Loader";
import { useQuery } from "@tanstack/react-query";
import "./style.scss";

export const PostsList = (): ReactElement => {
  const {data: posts, isLoading, isError } = useQuery({queryKey: ['posts'], queryFn: fetchPosts},)
  if (isLoading) {
    return <Loader />;
  }
  if(isLoading){
    return <div>Error</div>
  }
  // if (loading === "succeeded" && data.length === 0) {
  //   return (
  //     <div className="no-posts">
  //       <FontAwesomeIcon icon={faFaceFrown} />
  //       <h2>No posts!</h2>
  //     </div>
  //   );
  // }
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
