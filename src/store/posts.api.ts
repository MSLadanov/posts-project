import { API_ENDPOINTS } from "./endponts";
import { fetchPostsWithUsersData, fetchUser, fetchImage } from "./slices/utils";

export const fetchPosts = async () => {
  const response = await fetch(API_ENDPOINTS.POSTS);
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  const { posts } = await response.json();
  const postsWithUsersData = await fetchPostsWithUsersData(posts);
  return postsWithUsersData;
};

export const fetchTags = async () => {
  const response = await fetch(API_ENDPOINTS.TAGS);
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  const tags = await response.json();
  return tags;
};

export const fetchPostsByTag = async (tag: string) => {
  const response = await fetch(API_ENDPOINTS.POSTS_BY_TAG(tag));
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  const { posts } = await response.json();
  const postsWithUsersData = await fetchPostsWithUsersData(posts);
  return { postsWithUsersData, tag };
};

export const fetchPostById = async (id: number) => {
  const response = await fetch(API_ENDPOINTS.POST_BY_ID(id));
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  const post = await response.json();
  const user = await fetchUser(post.userId);
  const postsWithUserData = {
    ...post,
    user,
    postImage: await fetchImage(post.title),
  };
  return postsWithUserData;
};

export const fetchSearchedPosts = async (query: string) => {
  const response = await fetch(API_ENDPOINTS.SEARCH_POSTS(query));
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  const { posts } = await response.json();
  const postsWithUsersData = await fetchPostsWithUsersData(posts);
  return postsWithUsersData;
};

export const fetchPostComments = async (id: number) => {
  const response = await fetch(API_ENDPOINTS.POST_COMMENTS(id));
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  const { comments } = await response.json();
  return comments;
};
