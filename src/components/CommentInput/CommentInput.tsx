import { ReactElement, useState } from "react";
import { Input } from "@ui/Input";
import { Button } from "@ui/Button";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export const CommentInput = (): ReactElement => {
  const [commentText, setCommentText] = useState('')
  return <div>
    <Input type="text" value={commentText} setValue={setCommentText}/>
    <Button icon={faCommentDots}/>
  </div>;
};
