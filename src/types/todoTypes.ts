export type TTodo = {
  id: number;
  task: string;
  completed: boolean;
  dueDate: string;
};

export type TTodoList = {
  id: number;
  title: string;
  todos: TTodo[];
};

export type TTodoListsRequest = {
  todoLists: TTodoList[];
};

export interface TTodoListsState {
  todoLists: {
    data: TTodoList[];
    loading: "idle" | "pending" | "succeeded" | "failed";
  };
  currentTodoList: {
    data: TTodoList | {};
    loading: "idle" | "pending" | "succeeded" | "failed";
  };
}

export interface TTodoListsStore {
  todo: TTodoListsState
}
