import { ReactElement, useState } from "react";
import { Button } from "@ui/Button";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { TextArea } from "@ui/TextArea";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { TComment, TPostAppStore } from "@/types/types";
import { AppDispatch } from "@/store";
import { addComment } from "@/store/slices/PostsSlice";
import useFetch from "@/hooks/useFetch";

export const CommentInput = (): ReactElement => {
  const [commentText, setCommentText] = useState("");
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const { post } = useFetch(`https://dummyjson.com`);
  const { id, username, firstName, lastName } = useSelector(
    (state: TPostAppStore) => state.user.data
  );
  const postId = Number(pathname.split("/").at(-1));
  const sendComment = async () => {
    const newComment: TComment = {
      id: Math.floor(Math.random() * 20001) + 10000,
      body: commentText,
      postId,
      likes: 0,
      user: {
        id,
        fullName: firstName + " " + lastName,
        username,
      },
    };
    dispatch(addComment(newComment));
    await post('comments/add', newComment)
  };
  return (
    <div>
      <img
        src={`https://dummyjson.com/icon/${username}/50`}
        alt={firstName + " " + lastName + " avatar"}
      />
      <TextArea label="Comment text:" value={commentText} setValue={setCommentText} />
      <Button action={sendComment} payload={commentText} icon={faCommentDots} style={{color:'black'}} />
    </div>
  );
};
