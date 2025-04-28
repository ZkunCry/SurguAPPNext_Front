import ScheduleAside from "@/components/widgets/main/ScheduleAside";

import ScheduleMain from "@/components/widgets/schedule/ScheduleMain";
import ErrorComponent from "@/components/widgets/error/ErrorComponent";
export default async function SchedulePage() {
  const date = await fetch("http://localhost:3001/schedule/group", {
    cache: "no-cache",
  });
  const result = await date.json().then((res) => {
    const transformGroups = res.map((group: any) => ({
      value: group.name,
      label: group.name,
    }));
    return transformGroups;
  });

  return (
    <>
      <ScheduleMain groups={result} />
      <ScheduleAside />
    </>
  );
}
