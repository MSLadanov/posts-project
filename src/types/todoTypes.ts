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
