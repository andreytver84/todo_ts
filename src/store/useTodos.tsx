import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IStore, ITodoItem } from "../components/interfaces_types";
import { nanoid } from "nanoid";

export const useTodos = create<IStore>()(
  persist(
    (set): IStore => ({
      onlyQuicklyTasks: false,
      todos: [
        { id: "1", title: "first todo", competed: false, quickly: true },
        { id: "2", title: "second todo", competed: true, quickly: false },
        { id: "3", title: "third todo", competed: false, quickly: true },
      ],

      addTodo: (title: string, quickly: boolean) =>
        set((state) => {
          const newTodo: ITodoItem = {
            id: nanoid(),
            title,
            competed: false,
            quickly,
          };
          return { todos: [...state.todos, newTodo] };
        }),
      removeTodo: (id: string) =>
        set((state) => {
          const newTodos = state.todos.filter((item) => item.id !== id);
          console.log(newTodos);
          return { todos: newTodos };
        }),
      hideNotQuickly: () =>
        set((state) => {
          console.log(state.onlyQuicklyTasks);
          return { onlyQuicklyTasks: !state.onlyQuicklyTasks };
        }),
    }),
    {
      name: "todo-storage",
      getStorage: () => sessionStorage,
    }
  )
);
