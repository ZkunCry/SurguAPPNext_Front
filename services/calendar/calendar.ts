import axiosInstance from "@/utils/axiosInstance";
import { fillCurrentMonth } from "@/utils/fillCurrentMonth";
import type { Calendar } from "@/types/schedule";
import { daysOfWeek } from "@/utils/fillCurrentMonth";
export const CalendarService = {
  async getCalendar(group: string) {
    const { data } = await axiosInstance.get<Calendar>(
      `/calendar?group=${group}`
    );
    console.log(data);
    return data;
  },
  scheduleByday(schedule: Calendar) {
    return schedule.reduce((acc, item) => {
      const day = item.day;
      if (!acc[day]) acc[day] = [];
      acc[day].push(item);
      return acc;
    }, {});
  },
   getCorrectCurrentMonth (): Calendar {
    const currentMonth = fillCurrentMonth();
    const index = daysOfWeek.findIndex((day) => {
      return day.toUpperCase() === currentMonth[0].day.toUpperCase();
    });
    return [
      ...Array(index).fill({
        day: "",
      }),
      ...currentMonth,
    ];
  };
};
