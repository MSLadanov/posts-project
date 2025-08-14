import { ReactElement } from "react";
import { Button } from "@ui/Button";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { TextArea } from "@ui/TextArea";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { TPostAppStore } from "@/types/types";
import { useNewComment } from "@/hooks/useNewComment";

export const CommentInput = (): ReactElement => {
  const { username, firstName, lastName } = useSelector(
    (state: TPostAppStore) => state.user.data
  );
  const { pathname } = useLocation();
  const postId = Number(pathname.split("/").at(-1));
  const { commentText, setCommentText, addComment } = useNewComment(postId);
  return (
    <div>
      <img
        src={`https://dummyjson.com/icon/${username}/50`}
        alt={firstName + " " + lastName + " avatar"}
      />
      <TextArea
        label="Comment text:"
        value={commentText}
        setValue={setCommentText}
      />
      <Button
        action={() => addComment()}
        payload={commentText}
        icon={faCommentDots}
        style={{ color: "black" }}
      />
    </div>
  );
};
