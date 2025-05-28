import { ReactElement, useState } from "react";
import { Button } from "@ui/Button";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { TextArea } from "@ui/TextArea";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { TComment, TPostAppStore } from "@/types/types";
import { AppDispatch } from "@/store";
import { addComment } from "@/store/slices/PostsSlice";

export const CommentInput = (): ReactElement => {
  const [commentText, setCommentText] = useState("");
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const { id, username, firstName, lastName } = useSelector(
    (state: TPostAppStore) => state.user.data
  );
  const postId = Number(pathname.split("/").at(-1));
  const sendComment = async (text: string | object) => {
    console.log(text)
    const newComment: TComment = {
      id: Math.floor(Math.random() * 20001) + 10000,
      body: JSON.stringify(text),
      postId,
      likes: 0,
      user: {
        id,
        fullName: firstName + " " + lastName,
        username,
      },
    };
    dispatch(addComment(newComment));
  };
  return (
    <div>
      <TextArea value={commentText} setValue={setCommentText} />
      <Button action={sendComment} payload={""} icon={faCommentDots} />
    </div>
  );
};
