import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IStore, ITodoItem } from "../components/interfaces_types";
import { nanoid } from "nanoid";

export const useTodos = create<IStore>()(
  persist(
    (set): IStore => ({
      onlyQuicklyTasks: false,
      todos: [
        {
          id: "1",
          title: "first todo",
          competed: false,
          quickly: true,
          date: "07/08 16:02",
        },
        {
          id: "2",
          title: "second todo",
          competed: true,
          quickly: false,
          date: "05/08 10:02",
        },
        {
          id: "3",
          title: "third todo",
          competed: false,
          quickly: true,
          date: "03/08 6:12",
        },
      ],

      addTodo: (title: string, quickly: boolean, date: string) =>
        set((state) => {
          const newTodo: ITodoItem = {
            id: nanoid(),
            title,
            competed: false,
            quickly,
            date,
          };
          return { todos: [...state.todos, newTodo] };
        }),
      removeTodo: (id: string) =>
        set((state) => {
          const newTodos = state.todos.filter((item) => item.id !== id);
          return { todos: newTodos };
        }),
      hideNotQuickly: () =>
        set((state) => {
          return { onlyQuicklyTasks: !state.onlyQuicklyTasks };
        }),
    }),
    {
      name: "todo-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
