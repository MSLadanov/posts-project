/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useEffect } from "react";
import { TComment, TPostAppStore } from "@/types/types";
import { CommentCard } from "@/components/CommentCard";
import { CommentInput } from "@components/CommentInput";
import { ProtectedComponent } from "@components/ProtectedComponent";
import { fetchPostComments } from "@/store/posts.api";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";

export const Comments: React.FC<{ postId: number }> = ({
  postId,
}): ReactElement => {
  const { data } = useSelector((state : TPostAppStore) => state.posts.comments)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchPostComments(postId))
  }, [postId]);
  return (
    <div>
      <ProtectedComponent>
        <CommentInput />
      </ProtectedComponent>
      {data.map((comment : TComment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
