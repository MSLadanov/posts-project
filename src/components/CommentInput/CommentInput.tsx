import { ReactElement, useState } from "react";
import { Button } from "@ui/Button";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { TextArea } from "@ui/TextArea";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { TPostAppStore } from "@/types/types";

export const CommentInput = (): ReactElement => {
  const [commentText, setCommentText] = useState("");
  const { pathname } = useLocation();
  const { id, image, firstName, lastName } = useSelector(
    (state: TPostAppStore) => state.user.data
  );
  const postId = Number(pathname.split("/").at(-1));
  const sendComment = async (text: string | object) => {
    console.log(id, image, firstName, lastName, text, postId);
  };
  return (
    <div>
      <TextArea value={commentText} setValue={setCommentText} />
      <Button action={sendComment} payload={""} icon={faCommentDots} />
    </div>
  );
};
