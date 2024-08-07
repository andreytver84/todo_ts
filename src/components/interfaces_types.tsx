export type PropsChild = {
  children: React.ReactNode;
};

export type PropsItem = {
  title?: string;
  id: string;
};

export interface ITodoItem {
  id: string;
  title: string;
  competed: boolean;
}

export interface IStore {
  todos: ITodoItem[];
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
}

export interface SimpleDialogProps {
  open: boolean;

  onClose: () => void;
}
