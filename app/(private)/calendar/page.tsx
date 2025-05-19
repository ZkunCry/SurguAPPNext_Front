import Calendar from "@/components/widgets/calendar/Calendar";
import { ScheduleService } from "@/services/schedule/schedule";

export default async function CalendarPage() {
  const schedule = await ScheduleService.getCalendar("609-11");
  return <Calendar schedule={schedule} />;
}
