import axiosInstance from "@/utils/axiosInstance";
import type { Schedule } from "@/types/schedule";
export const ScheduleService = {
  async getSchedule(group: string) {
    const { data } = await axiosInstance.get<Schedule>(
      `/schedule/student?group=${group}`
    );

    return data;
  },
  sortSchedule(schedule: Schedule) : Schedule {
    const dayOrder = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return schedule.sort((a, b) => {
      const dayCompare = dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day);
      if (dayCompare !== 0) return dayCompare;
      return a.position - b.position;
    });
  },
};
