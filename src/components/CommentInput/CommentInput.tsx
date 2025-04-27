import { ReactElement, useState } from "react";
import { Button } from "@ui/Button";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { TextArea } from "@ui/TextArea";

export const CommentInput = (): ReactElement => {
  const [commentText, setCommentText] = useState('')
  return <div>
    <TextArea value={commentText} setValue={setCommentText} />
    <Button icon={faCommentDots}/>
  </div>;
};
