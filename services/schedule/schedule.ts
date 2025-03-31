import axiosInstance from "@/utils/axiosInstance";
import type { Schedule } from "@/types/schedule";
export const ScheduleService = {
  async getSchedule(group: string) {
    const { data } = await axiosInstance.get<Schedule>(
      `/schedule/student?group=${group}`
    );

    return data;
  },
};
