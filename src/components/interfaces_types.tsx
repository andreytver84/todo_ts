export type PropsChild = {
  children: React.ReactNode;
};

export type PropsItem = {
  title?: string;
  id: string;
  quickly: boolean;
};

export interface ITodoItem {
  id: string;
  title: string;
  competed: boolean;
  quickly: boolean;
}

export interface IStore {
  todos: ITodoItem[];
  addTodo: (title: string, quickly: boolean) => void;
  removeTodo: (id: string) => void;
}

export interface SimpleDialogProps {
  open: boolean;

  onClose: () => void;
}
