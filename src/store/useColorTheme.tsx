import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IStoreTheme } from "../types/interfaces_types";

export const useColorTheme = create<IStoreTheme>()(
  persist(
    (set, get): IStoreTheme => ({
      theme: "light",
      onToggleTheme: () => {
        get().theme === "light"
          ? set({ theme: "dark" })
          : set({ theme: "light" });
      },
      setTheme: (theme: string) => {
        set((state) => {
          return {
            ...state,
            theme: theme,
          };
        });
      },
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
