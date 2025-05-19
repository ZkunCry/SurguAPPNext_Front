import axiosInstance from "@/utils/axiosInstance";
import type { Calendar, Schedule } from "@/types/schedule";
export const ScheduleService = {
  async getSchedule(group: string) {
    const { data } = await axiosInstance.get<Schedule>(
      `/schedule/student?group=${group}`
    );

    return data;
  },

  async getCalendar(group: string) {
    const { data } = await axiosInstance.get<Calendar>(
      `/calendar?group=${group}`
    );
    console.log(data);
    return data;
  },
};
