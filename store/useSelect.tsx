import { create } from "zustand";

interface ISelectState {
  select: string;
  setSelect: (select: string) => void;
}

export const useSelect = create<ISelectState>((set) => ({
  select: "",
  setSelect: (select) => set({ select }),
}));
