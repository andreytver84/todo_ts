export type PropsChild = {
  children: React.ReactNode;
};

export type PropsItem = {
  title?: string;
  id: string;
  quickly: boolean;
  date: string;
  complite: boolean;
};

export interface ITodoItem {
  id: string;
  title: string;
  competed: boolean;
  quickly: boolean;
  date: string;
  body: string;
}

export interface IStore {
  onlyQuicklyTasks: boolean;
  onlyThisDay: string;
  todos: ITodoItem[];
  fetchTodos: () => void;
  loading: boolean;
  error: boolean;
  addTodo: (
    title: string,
    quickly: boolean,
    date: string,
    body: string
  ) => void;
  compliteTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  quicklyToggle: (val: boolean) => void;
  getTask: (id: string) => ITodoItem;
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
