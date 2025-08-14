import { TPostAppStore, TComment } from "@/types/types";
import { Dispatch, ReactPortal, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "./useFetch";
import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { fetchPostComments } from "@/api/posts.api";
import { useNotify } from "./useNotify";

interface IUseNewCommentReturn {
  commentText: string;
  setCommentText: Dispatch<SetStateAction<string>>;
  addComment: UseMutateFunction;
  notifyPortal: ReactPortal | null | false;
}

export const useNewComment = (postId: number): IUseNewCommentReturn => {
  const { id } = useSelector((state: TPostAppStore) => state.user.data);
  const { notify, notifyPortal } = useNotify();
  const { data: comments } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPostComments(postId),
    initialData: [],
  });
  const queryClient = useQueryClient();
  const { post } = useFetch(`https://dummyjson.com`);
  const [commentText, setCommentText] = useState("");
  const sendComment = async () => {
    const newCommentRequest = {
      body: commentText,
      postId,
      likes: 0,
      userId: id,
    };
    const newComment = await post<TComment>("comments/add", newCommentRequest);
    return { ...newComment, likes: 0 };
  };
  const { mutate: addComment } = useMutation({
    mutationKey: ["comments"],
    mutationFn: sendComment,
    onSuccess: (newComment) => {
      queryClient.setQueryData(["comments"], [newComment, ...comments]);
      notify("New comment added!", "success");
      setCommentText("");
    },
  });
  return { addComment, commentText, setCommentText, notifyPortal };
};
