import { TComment } from "@/types/types";
import { ReactElement } from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@ui/Button";
import { Container } from "@ui/Container";
import "./style.scss";

export const Comment: React.FC<{ comment: TComment }> = ({
  comment,
}): ReactElement => {
  const rateComment = async (arg: string | object) => {
    console.log(arg)
  }
  return (
    <div className="comment-card">
      <div className="comment-card__header">
        <Container>
          <img src={`https://dummyjson.com/icon/${comment.user.username}/128`} alt={comment.user.fullName + " avatar"} />
          <h5>{comment.user.fullName}</h5>
        </Container>
      </div>
      <div className="comment-card__body">
        <p>{comment.body}</p>
      </div>
      <div className="comment-card__footer">
        <Container>
          <Button icon={faThumbsUp} action={rateComment} payload={''}>{comment.likes}</Button>
        </Container>
      </div>
    </div>
  );
};
