import { ReactElement, useEffect } from "react";
import useFetch from "@hooks/useFetch";
import { TComment } from "@/types/types";
import { Comment } from "@components/Comment";
import { CommentInput } from "@components/CommentInput";
import { Loader } from "@components/Loader";

export const Comments: React.FC<{ postId: number }> = ({
  postId,
}): ReactElement => {
  const { data, isLoading, isError } = useFetch<{ comments: TComment[] }>(
    `https://dummyjson.com/comments/post/${postId}`
  );
  useEffect(() => {
    console.log(data);
  }, [data]);
  if (isLoading) {
    return <Loader/> ;
  }
  if (isError) {
    return <div>Ошибка</div>;
  }
  return (
    <div>
      <CommentInput/>
      {data?.comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};
