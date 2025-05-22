import { TComment } from "@/types/types";
import { useState, useCallback } from "react";

interface UseCommentPostProps {
  comment: TComment;
  patch: <T>(endpoint: string, data: any) => Promise<T | undefined>;
}

export const useRateComment = ({ comment, patch }: UseCommentPostProps) => {
  const [commentState, setCommentState] = useState(comment);
  const rateCommentAsync = useCallback(async () => {
    const newLikes = commentState.liked
      ? commentState.likes - 1
      : commentState.likes + 1;
    const newLiked = !commentState.liked;
    setCommentState({
      ...commentState,
      likes: newLikes,
      liked: newLiked,
    });
    try {
      const ratedComment = await patch<TComment>(`comments/${comment.id}`, {
        likes: newLikes,
      });
      if (
        ratedComment &&
        (ratedComment.likes !== newLikes || ratedComment.liked !== newLiked)
      ) {
      }
    } catch (error) {
      setCommentState(commentState);
      console.log(error);
    }
  }, [comment.id, commentState, patch]);

  return { commentState, rateComment: rateCommentAsync };
};
