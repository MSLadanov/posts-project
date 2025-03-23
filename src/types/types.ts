export type TPost = {
  id: number,
  title: string,
  body: string,
  tags: string[],
  reactions: {
    likes: number,
    dislikes: number
  },
  views: number,
  userId: number
};

export type TComment = {
  id: number,
  body: string,
  postId: number,
  likes: number,
  user: {
    id: number,
    username: string,
    fullName: string
  }
}

export type TPostsList = {
  posts:TPost[]
};

export type TCommentsList = {
  comments: TComment[]
}

export type TPostsListsRequest = {

};

export interface TPostsListState {
  postsList: {
    data: TPostsList[] | [];
    loading: "idle" | "pending" | "succeeded" | "failed";
  };
  post: {
    data: TPost | {},
    loading: "idle" | "pending" | "succeeded" | "failed";
  }
  comments: {
    data: TCommentsList | [];
    loading: "idle" | "pending" | "succeeded" | "failed";
  };
}

export interface TPostsListStore {
  posts: TPostsListState
}
