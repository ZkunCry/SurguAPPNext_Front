import Calendar from "@/components/widgets/calendar/Calendar";
import { CalendarService } from "@/services/calendar/calendar";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
export default async function CalendarPage() {
  const queryClient = new QueryClient();

  // const schedule = await ScheduleService.getCalendar("609-11");
  // console.log(schedule);
  await queryClient.prefetchQuery({
    queryKey: ["calendar", "609-11"],
    queryFn: () => CalendarService.getCalendar("609-11"),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Calendar />
    </HydrationBoundary>
  );
}
