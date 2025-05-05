import Calendar from "@/components/widgets/calendar/Calendar";
import { ScheduleService } from "@/services/schedule/schedule";

export default async function CalendarPage() {
  const schedule = ScheduleService.sortSchedule(
    await ScheduleService.getSchedule("609-11")
  );

  return <Calendar schedule={schedule} />;
}
