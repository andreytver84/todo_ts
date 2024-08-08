import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IStore, ITodoItem } from "../components/interfaces_types";
import { nanoid } from "nanoid";
import { format } from "date-fns";

export const useTodos = create<IStore>()(
  persist(
    (set, get): IStore => ({
      onlyQuicklyTasks: false,
      todos: [
        {
          id: "1",
          title: "first todo",
          competed: false,
          quickly: true,
          date: "07/08 16:02",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
          id: "2",
          title: "second todo",
          competed: true,
          quickly: false,
          date: "05/08 10:02",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
          id: "3",
          title: "third todo",
          competed: false,
          quickly: true,
          date: "03/08 6:12",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
      ],

      addTodo: (title: string, quickly: boolean, date: string, body: string) =>
        set((state) => {
          const newTodo: ITodoItem = {
            id: nanoid(),
            title,
            competed: false,
            quickly,
            date,
            body,
          };
          return { todos: [...state.todos, newTodo] };
        }),
      removeTodo: (id: string) =>
        set((state) => {
          const newTodos = state.todos.filter((item) => item.id !== id);
          return { todos: newTodos };
        }),

      compliteTodo: (id: string) =>
        set((state) => {
          const newTodos = state.todos.map((item) => {
            if (item.id === id) {
              return { ...item, competed: !item.competed };
            }
            return item;
          });
          return { todos: newTodos };
        }),
      todayTaskToggle: (val) => {
        const dateToday = format(new Date(), "dd/MM");
        if (val) {
          const taskExpired = get().todos.filter(
            (task) => task.date.slice(0, 5) === dateToday
          );
          return taskExpired;
        }

        return get().todos;
      },
      hideNotQuickly: () =>
        set((state) => {
          return { onlyQuicklyTasks: !state.onlyQuicklyTasks };
        }),
      getTask: (id: string) => {
        if (id) {
          let findTask;
          get().todos.forEach((task) => {
            if (task.id === id) {
              findTask = task;
            }
          });
          return findTask;
        }
      },
    }),
    {
      name: "todo-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
