import {
  getUpdatedPost,
  ratePagedPost,
  ratePost,
} from "@/store/slices/PostsSlice";
import { TPost } from "@/types/types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

interface UseRatePostProps {
  post: TPost;
  getPost: <T>(endpoint: string) => Promise<T | undefined>;
  patchPost: <T>(endpoint: string, data: any) => Promise<T | undefined>;
}

export const useRatePost = ({ post, getPost, patchPost }: UseRatePostProps) => {
  const dispatch = useDispatch();
  const ratePostAsync = useCallback(
    async (newRate: string | object) => {
      const { rated, rate } = post;
      const updatingPost = await getPost<TPost>(`posts/${post.id}`);
      const basePostData = {
        ...updatingPost,
        user: post.user,
        postImage: post.postImage
      };
      const updatePostReactions = async () => {
        const updatedPost = getUpdatedPost(post.id);
        await patchPost<TPost>(`posts/${post.id}`, {
          reactions: updatedPost?.reactions,
        });
      };
      if (rated && rate === newRate) {
        dispatch(ratePost({ post: basePostData }));
        await updatePostReactions();
      } else if (rated && rate !== newRate) {
        dispatch(
          ratePost({
            post: basePostData,
            reaction: newRate,
          })
        );
        await updatePostReactions();
      } else {
        dispatch(
          ratePost({
            post: basePostData,
            reaction: newRate,
          })
        );
        await updatePostReactions();
      }
    },
    [post, dispatch, getPost, patchPost]
  );

  const ratePagedPostAsync = useCallback(
    async (newRate: string | object) => {
      const { rated, rate } = post;
      const updatingPost = await getPost<TPost>(`posts/${post.id}`);
      const basePostData = {
        ...updatingPost,
        user: post.user,
        postImage: post.postImage
      };
      const updatePostReactions = async () => {
        const updatedPost = getUpdatedPost(post.id);
        await patchPost<TPost>(`posts/${post.id}`, {
          reactions: updatedPost?.reactions,
        });
      };
      if (rated && rate === newRate) {
        dispatch(ratePagedPost({ post: basePostData }));
        await updatePostReactions();
      } else if (rated && rate !== newRate) {
        dispatch(
          ratePagedPost({
            post: basePostData,
            reaction: newRate,
          })
        );
        await updatePostReactions();
      } else {
        dispatch(
          ratePagedPost({
            post: basePostData,
            reaction: newRate,
          })
        );
        await updatePostReactions();
      }
    },
    [post, dispatch, getPost, patchPost]
  );
  return { ratePost: ratePostAsync, ratePagedPost: ratePagedPostAsync };
};
