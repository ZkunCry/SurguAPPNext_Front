import { create } from "zustand";

interface ISelectState {
  selectDay: string;
  setSelect: (select: string) => void;
}

export const useSelectDate = create<ISelectState>((set) => ({
  selectDay: "",
  setSelect: (select) => set({ select }),
}));
