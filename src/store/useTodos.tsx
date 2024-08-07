import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IStore, ITodoItem } from "../components/interfaces_types";
import { nanoid } from "nanoid";

export const useTodos = create<IStore>()(
  persist(
    (set): IStore => ({
      todos: [
        { id: "1", title: "first todo", competed: false },
        { id: "2", title: "second todo", competed: true },
        { id: "3", title: "third todo", competed: false },
      ],
      addTodo: (title: string) =>
        set((state) => {
          const newTodo: ITodoItem = {
            id: nanoid(),
            title,
            competed: false,
          };
          return { todos: [...state.todos, newTodo] };
        }),
      removeTodo: (id: string) =>
        set((state) => {
          const newTodos = state.todos.filter((item) => item.id !== id);
          console.log(newTodos);
          return { todos: newTodos };
        }),
    }),
    {
      name: "todo-storage",
      getStorage: () => sessionStorage,
    }
  )
);
