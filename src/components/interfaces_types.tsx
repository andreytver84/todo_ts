export type PropsChild = {
  children: React.ReactNode;
};

export type PropsItem = {
  title?: string;
};

export interface ITodoItem {
  id: number;
  title: string;
  competed: boolean;
}

export interface IStore {
  todos: ITodoItem[];
  addTodo: (title: string) => void;
}
