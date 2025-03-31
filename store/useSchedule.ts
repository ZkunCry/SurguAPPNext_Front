import type { IUser } from "@/types/user";
import { create } from "zustand";
interface IScheduleDay {
  day: string;
  number: number;
  monthNumber: number;
}
interface IGroupState {
  group: string | null;
  scheduleDay: IScheduleDay | null;
  setGroup: (group: string) => void;
  getCurrentGroup: () => string | null;
  setScheduleDay: (scheduleDay: IScheduleDay) => void;
}
const useScheduleStore = create<IGroupState>((set, get) => ({
  group: null,
  scheduleDay: null,
  setGroup(group) {
    set({ group });
  },
  setScheduleDay(scheduleDay) {
    set({ scheduleDay });
  },
  getCurrentGroup() {
    return get().group;
  },
}));
export default useScheduleStore;
