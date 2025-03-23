export type TPost = {

};

export type TPostsList = {
};

export type TPostsListsRequest = {

};

export interface TPostsListState {
  postList: {
    data: TTodoList[];
    loading: "idle" | "pending" | "succeeded" | "failed";
  };
  currentPost: {
    data: TTodoList | {};
    loading: "idle" | "pending" | "succeeded" | "failed";
  };
}

export interface TPostsListStore {
  todo: TTodoListsState
}
