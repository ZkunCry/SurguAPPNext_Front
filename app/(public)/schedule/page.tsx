import ScheduleAside from "@/components/widgets/main/ScheduleAside";

import Grid from "@/components/widgets/main/Grid";
import SidebarMenu from "@/components/widgets/main/SidebarMenu";
import { publicLinks } from "@/app/constants/sidebar/links";

import ScheduleMain from "@/components/widgets/schedule/ScheduleMain";
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
    <Grid className="md:grid-cols-[minmax(0,1fr),280px]">
      <SidebarMenu links={publicLinks} />
      <ScheduleMain groups={result} />
      <ScheduleAside />
    </Grid>
  );
}
