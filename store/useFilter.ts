import { create } from "zustand";

export interface IFilterState<T> {
  filters: T;
  isFiltered: boolean;
  setFilter: <K extends keyof T>(key: K, value: T[K]) => void;
  applyFilters: () => void;
  resetFilters: () => void;
}

interface IFilterSchedule {
  pair: string;
  time: string;
}

export const createFilterStore = <T extends object>(initial: T) =>
  create<IFilterState<T>>((set) => ({
    filters: initial,
    isFiltered: false,
    setFilter: (key, value) =>
      set((state) => ({
        filters: {
          ...state.filters,
          [key]: value,
        },
      })),
    resetFilters: () => {
      set({ filters: initial, isFiltered: false });
    },
    applyFilters: () => set({ isFiltered: true }),
  }));

export const useFilter = createFilterStore<IFilterSchedule>({
  pair: "",
  time: "",
});
