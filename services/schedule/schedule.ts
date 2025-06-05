import axiosInstance from "@/utils/axiosInstance";
import type { Schedule } from "@/types/schedule";
import { IGroup } from "@/types/schedule";
export const ScheduleService = {
  async getSchedule(group: string) {
    const { data } = await axiosInstance.get<Schedule>(
      `/schedule/student?group=${group}`
    );

    return data;
  },
  transformGroup(groups: IGroup[]) {
    return groups.map((group: IGroup) => ({
      value: group.name,
      label: group.name,
    }));
  },
  pluralizeYears(count: number): string {
    const absCount = Math.abs(count);
    const lastDigit = absCount % 10;
    const lastTwoDigits = absCount % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return `${count} лет`;
    }

    if (lastDigit === 1) {
      return `${count} год`;
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return `${count} года`;
    }

    return `${count} лет`;
  },
};
