import { TComment } from "@/types/types";
import { ReactElement, useState } from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@ui/Button";
import { Container } from "@ui/Container";
import useFetch from "@hooks/useFetch";
import "./style.scss";

export const Comment: React.FC<{ comment: TComment }> = ({
  comment,
}): ReactElement => {
  const [commentState, setCommentState] = useState({
    ...comment,
    rated: false,
  });
  const { patch } = useFetch(`https://dummyjson.com`);
  const rateComment = async (rate: string | object) => {
    let { likes } = commentState;
    const ratedComment = await patch(`comments/${comment.id}`, {
      likes: ++likes,
    });
    const updatedComment = {
      ...ratedComment,
      likes: commentState.rated ? ratedComment.likes : ++ratedComment.likes,
    };
    setCommentState({ ...updatedComment, rated: !commentState.rated });
  };

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
          <Button icon={faThumbsUp} action={rateComment} payload={""}>
            {commentState.likes}
          </Button>
        </Container>
      </div>
    </div>
  );
};
