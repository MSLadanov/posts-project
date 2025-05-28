import { TComment, TPostAppStore } from "@/types/types";
import { ReactElement } from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@ui/Button";
import { Container } from "@ui/Container";
import useFetch from "@hooks/useFetch";
import { useRateComment } from "@/hooks/useRateComment";
import "./style.scss";
import { useSelector } from "react-redux";

export const CommentCard: React.FC<{ comment: TComment }> = ({
  comment,
}): ReactElement => {
  const { patch } = useFetch(`https://dummyjson.com`);
  const { commentState, rateComment } = useRateComment({ comment, patch });
  const { id } = useSelector((state: TPostAppStore) => state.user.data);
  return (
    <div className="comment-card">
      <div className="comment-card__header">
        <Container>
          <img
            src={`https://dummyjson.com/icon/${commentState.user.username}/128`}
            alt={commentState.user.fullName + " avatar"}
          />
          <h5>{commentState.user.fullName}</h5>
        </Container>
      </div>
      <div className="comment-card__body">
        <p>{commentState.body}</p>
      </div>
      <div className="comment-card__footer">
        <Container>
          <Button
            icon={faThumbsUp}
            action={rateComment}
            disabled={comment.user.id === id}
            payload={""}
          >
            {commentState.likes}
          </Button>
        </Container>
      </div>
    </div>
  );
};
