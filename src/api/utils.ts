import { TPost } from "@/types/types";
import { API_ENDPOINTS } from './endpoints'

export const fetchImage = async (text: string): Promise<string> => {
  try {
    const backgroundColor = Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, "0");
    const textColor = "ffffff";
    const encodedText = encodeURIComponent(text);
    const url = `${API_ENDPOINTS.IMAGE}/${API_ENDPOINTS.IMAGE_SIZE}/${backgroundColor}/${textColor}?text=${encodedText}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Failed to fetch image:", error);
    throw new Error("Не удалось загрузить изображение");
  }
};

export const fetchUser = async (id: number) => {
  const response = await fetch(`${API_ENDPOINTS.USERS}/${id}`);
  if (!response.ok) throw new Error("Ошибка запроса");
  const { firstName, lastName, image } = await response.json();
  return { firstName, lastName, image };
};

export const fetchPostsWithUsersData = async (posts: TPost[]) => {
  return await Promise.all(
    posts.map(async (post: TPost) => ({
      ...post,
      rated: false,
      rate: null,
      user: await fetchUser(post.userId),
      postImage: await fetchImage(post.title),
    }))
  );
};

export const fetchUserPosts = async (
  id: number,
  setState: (posts: TPost[] | []) => void
) => {
  try {
    const response = await fetch(`${API_ENDPOINTS.USER_POSTS(id)}`);
    const { posts }: { posts: TPost[] } = await response.json();
    if (!posts) {
      setState([]);
      return;
    }
    const postsWithImages = await Promise.all(
      posts.map(async (post: TPost) => ({
        ...post,
        rated: false,
        rate: null,
        postImage: await fetchImage(post.title),
      }))
    );
    setState([...postsWithImages]);
  } catch (error) {
    console.error("Error fetching user posts:", error);
    setState([]);
  }
};
