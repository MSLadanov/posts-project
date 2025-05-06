import { ReactElement } from "react";
import useFetch from "@hooks/useFetch";
import { TComment } from "@/types/types";
import { Comment } from "@components/Comment";
import { CommentInput } from "@components/CommentInput";

export const Comments: React.FC<{ postId: number }> = ({
  postId,
}): ReactElement => {
  const { data, } = useFetch<{ comments: TComment[] }>(
    `https://dummyjson.com/comments/post/${postId}`
  );
  return (
    <div>
      <CommentInput/>
      {data?.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
