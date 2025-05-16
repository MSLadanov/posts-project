import { ReactElement, useEffect, useState } from "react";
import useFetch from "@hooks/useFetch";
import { TComment } from "@/types/types";
import { Comment } from "@components/Comment";
import { CommentInput } from "@components/CommentInput";

export const Comments: React.FC<{ postId: number }> = ({
  postId,
}): ReactElement => {
  const [data, setData] = useState<{ comments: TComment[] }>();
  const { get } = useFetch<{ comments: TComment[] }>(`https://dummyjson.com`);
  useEffect(() => {
    const getComments = async () => {
      const comments = await get(`comments/post/${postId}`);
      setData(comments);
    };
    getComments();
  }, [postId]);
  return (
    <div>
      <CommentInput />
      {data?.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
