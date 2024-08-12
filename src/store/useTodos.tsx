import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IStore, ITodoItem } from "../types/interfaces_types";
import { nanoid } from "nanoid";

const data = [
  {
    id: "1",
    title: "first todo",
    competed: false,
    quickly: true,
    date: "07/08 16:02",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: "11",
    title: "first todo 11",
    competed: false,
    quickly: false,
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
  {
    id: "4",
    title: "third todo",
    competed: false,
    quickly: true,
    date: "12/08 6:12",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
];

export const useTodos = create<IStore>()(
  persist(
    (set, get): IStore => ({
      onlyQuicklyTasks: false,
      onlyThisDay: "",
      todos: [],
      loading: false,
      error: false,
      fetchTodos: async () => {
        set({ loading: true });
        setTimeout(() => {
          if (get().todos.length > 0) {
            set({ todos: [...get().todos] });
          } else {
            set({ todos: [...data] });
          }
          set({ loading: false });
          set({ todos: [...get().todos] });
        }, 3000);

        //clearTimeout(timer);
      },

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

          return { todos: [...state.todos, newTodo] }; // здесь мы должны отправить post запрос
        }),
      removeTodo: (id: string) =>
        set((state) => {
          const newTodos = state.todos.filter((item) => item.id !== id);
          return { todos: newTodos }; // здесь DELETE
        }),

      compliteTodo: (id: string) =>
        set((state) => {
          const newTodos = state.todos.map((item) => {
            if (item.id === id) {
              return { ...item, competed: !item.competed };
            }
            return item;
          });

          return { todos: newTodos }; //здесь PUT
        }),

      quicklyToggle: (val: boolean) => {
        set({ onlyQuicklyTasks: val });
      },
      setDayFilter: (val: string) => {
        set({ onlyThisDay: val });
      },
      getTask: (id: string): ITodoItem => {
        return get().todos.find((item) => item.id === id)!;
      },
    }),
    {
      name: "todo-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
