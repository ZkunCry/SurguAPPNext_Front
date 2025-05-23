import ScheduleAside from "@/components/widgets/main/ScheduleAside";
import ScheduleMain from "@/components/widgets/schedule/ScheduleMain";
import { ScheduleService } from "@/services/schedule/schedule";
import { Group } from "@/types/schedule";
export default async function SchedulePage() {
  const data = await fetch("http://localhost:3001/schedule/group", {
    cache: "no-cache",
  });
  const groups = await data.json().then((res: Group[]) => {
    return ScheduleService.transformGroup(res);
  });
  console.log(groups);
  return (
    <>
      <ScheduleMain groups={groups} />
      <ScheduleAside />
    </>
  );
}
