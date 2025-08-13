/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement } from "react";
import { TComment } from "@/types/types";
import { CommentCard } from "@/components/CommentCard";
import { CommentInput } from "@components/CommentInput";
import { ProtectedComponent } from "@components/ProtectedComponent";
import { fetchPostComments } from "@/api/posts.api";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../Loader";

export const Comments: React.FC<{ postId: number }> = ({
  postId,
}): ReactElement => {
  // const dispatch = useDispatch<AppDispatch>()
  // useEffect(() => {
  //   dispatch(fetchPostComments(postId))
  // }, [postId]);
  const {
    data: comments,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: () => fetchPostComments(postId),
  });
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div>
      <ProtectedComponent>
        <CommentInput />
      </ProtectedComponent>
      {comments.map((comment: TComment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
