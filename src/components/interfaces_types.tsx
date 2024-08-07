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
  onlyQuicklyTasks: boolean;
  todos: ITodoItem[];
  addTodo: (title: string, quickly: boolean) => void;
  removeTodo: (id: string) => void;
  hideNotQuickly: () => void;
}

export interface IStoreTheme {
  theme: string;
  onToggleTheme: () => void;
  setTheme: (theme: string) => void;
}

export interface SimpleDialogProps {
  open: boolean;

  onClose: () => void;
}
