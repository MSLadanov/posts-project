const API_BASE_URL = "https://dummyjson.com";
const POST_LIMITS = 5;

export const API_ENDPOINTS = {
  USERS: `${API_BASE_URL}/users`,
  IMAGE: `${API_BASE_URL}/image`,
  TAGS: `${API_BASE_URL}/posts/tags`,
  IMAGE_SIZE: "800x800",
  POSTS: (tag: string | null, orderBy: string | null) =>
    tag
      ? orderBy
        ? `${API_BASE_URL}/posts/tag/${tag}?limit=${POST_LIMITS}&sortBy=${orderBy}&order=desc`
        : `${API_BASE_URL}/posts/tag/${tag}?limit=${POST_LIMITS}`
      : `${API_BASE_URL}/posts?limit=${POST_LIMITS}`,
  POST_BY_ID: (id: number) => `${API_BASE_URL}/posts/${id}`,
  SEARCH_POSTS: (query: string) => `${API_BASE_URL}/posts/search?q=${query}`,
  POST_COMMENTS: (id: number) => `${API_BASE_URL}/comments/post/${id}`,
  USER_POSTS: (id: number) => `${API_BASE_URL}/posts/user/${id}`,
};
