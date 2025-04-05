import type { IUser } from "@/types/user";
import { create } from "zustand";
interface IScheduleDay {
  day: string;
  number: number;
  monthNumber: number;
}
interface IGroupState {
  group: string | null;
  subGroup: string | null;
  scheduleDay: IScheduleDay | null;
  setGroup: (group: string) => void;
  setSubGroup: (subGroup: string) => void;
  getCurrentGroup: () => string | null;
  setScheduleDay: (scheduleDay: IScheduleDay) => void;
}
const useScheduleStore = create<IGroupState>((set, get) => ({
  group: null,
  subGroup: null,
  scheduleDay: null,
  setGroup(group) {
    set({ group });
  },
  setSubGroup(subGroup) {
    set({ subGroup });
  },
  setScheduleDay(scheduleDay) {
    set({ scheduleDay });
  },
  getCurrentGroup() {
    return get().group;
  },
}));
export default useScheduleStore;
