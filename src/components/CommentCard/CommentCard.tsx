import { TComment } from "@/types/types";
import { ReactElement } from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@ui/Button";
import { Container } from "@ui/Container";
import useFetch from "@hooks/useFetch";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { rateComment } from "@/store/slices/PostsSlice";
import "./style.scss";

export const CommentCard: React.FC<{ comment: TComment }> = ({
  comment,
}): ReactElement => {
  const { patch } = useFetch(`https://dummyjson.com`);
  const dispatch = useDispatch<AppDispatch>()
  const rateCommentAsync = async (rate: string | object) => {
    // const ratedComment = await patch(`comments/${comment.id}`, {});
    // dispatch()
    dispatch(rateComment({id: comment.id}))
  };
  return (
    <div className="comment-card">
      <div className="comment-card__header">
        <Container>
          <img
            src={`https://dummyjson.com/icon/${comment.user.username}/128`}
            alt={comment.user.fullName + " avatar"}
          />
          <h5>{comment.user.fullName}</h5>
        </Container>
      </div>
      <div className="comment-card__body">
        <p>{comment.body}</p>
      </div>
      <div className="comment-card__footer">
        <Container>
          <Button icon={faThumbsUp} action={rateCommentAsync} payload={""}>
            {comment.likes}
          </Button>
        </Container>
      </div>
    </div>
  );
};
