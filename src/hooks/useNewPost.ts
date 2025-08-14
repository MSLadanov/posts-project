import { TPost, TPostAppStore } from "@/types/types";
import { ReactPortal, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "./useFetch";
import { fetchImage } from "@/api/utils";
import { useNotify } from "./useNotify";
import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Dispatch } from "react";
import { fetchPosts } from "@/api/posts.api";

interface IUseNewPostReturn {
  body: string;
  title: string;
  tags: string[];
  notifyPortal: ReactPortal | null | false;
  setTitle: Dispatch<SetStateAction<string>>;
  setBody: Dispatch<SetStateAction<string>>;
  handleTag: (tag: string) => void;
  clearPostInput: () => void;
  addPost: UseMutateFunction;
}

export const useNewPost = (): IUseNewPostReturn => {
  const {data: posts} = useQuery({queryKey:['posts'], queryFn: fetchPosts,initialData: []})
  const queryClient = useQueryClient();
  const { id, firstName, lastName, image } = useSelector(
    (state: TPostAppStore) => state.user.data
  );
  const { post } = useFetch(`https://dummyjson.com`);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const { notify, notifyPortal } = useNotify();
  const clearPostInput = () => {
    setBody("");
    setTitle("");
    setTags([]);
  };
  const handleTag = (tag: string) => {
    setTags([...tags, tag]);
  };
  const addNewPost = async () => {
    const newPostData: TPost = {
      id: 0,
      userId: id,
      user: {
        firstName,
        lastName,
        image,
      },
      comments: [],
      rate: "",
      postImage: await fetchImage(title),
      rated: false,
      title,
      body,
      tags,
      views: 0,
      reactions: {
        likes: 0,
        dislikes: 0,
      },
    };
    const response = await post<TPost>("posts/add", newPostData);
    const newPost = {...newPostData, id: response?.id}
    clearPostInput();
    return newPost
  };
  const { mutate: addPost } = useMutation({
    mutationKey: ["posts"],
    mutationFn: addNewPost,
    onSuccess:(newPost) => {
      queryClient.setQueryData(['posts'], [newPost, ...posts])
      notify("New post added!", "success");
    }
  });
  return {
    body,
    title,
    tags,
    notifyPortal,
    setTitle,
    setBody,
    handleTag,
    clearPostInput,
    addPost,
  };
};
