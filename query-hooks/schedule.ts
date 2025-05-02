import type { Schedule } from "@/types/schedule";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { ScheduleService } from "@/services/schedule/schedule";
export function useGetScheduleByGroup(
  group: string | null,
  options?: UseQueryOptions<Schedule, Error>
) {
  return useQuery<Schedule, Error>({
    queryKey: ["schedule", group],
    staleTime: 60 * 60 * 1000,

    queryFn: async () => ScheduleService.getSchedule(group),
    ...options,
  });
}
