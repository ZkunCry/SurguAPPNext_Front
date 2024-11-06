import ScheduleAside from "@/components/widgets/main/ScheduleAside";
import Link from "next/link";
import ScheduleSlider from "@/components/widgets/schedule/ScheduleSlider";
import Grid from "@/components/widgets/main/Grid";
import SidebarMenu from "@/components/widgets/main/SidebarMenu";
import { publicLinks } from "@/app/constants/sidebar/links";
import TitleWithSearch from "@/components/widgets/main/TitleWithSearch";
import ScheduleCards from "@/components/widgets/schedule/ScheduleCards";
export default function SchedulePage() {
  return (
    <Grid className="md:grid-cols-[minmax(0,1fr),280px]">
      <SidebarMenu links={publicLinks} />
      <main className="flex flex-col w-full gap-[10px] overflow-hidden">
        <TitleWithSearch page="Расписание" placeholder="Поиск учебной группы" />
        <div className="flex flex-col bg-maincolor mt-[5px]  rounded-[10px] px-[10px] pt-[20px] pb-[30px] gap-[30px]">
          <div className="flex flex-1 justify-between items-center text-[18px]">
            <div className="inline-flex items-center gap-[10px] text-text">
              <h1>Моя группа</h1> <span className="text-[16px]">609-21</span>
            </div>

            <Link className="text-primary text-sm" href={"/"}>
              Расписание сессии
            </Link>
          </div>
          <div className="inline-flex">Неделя 1 | числитель</div>
          <ScheduleSlider />
        </div>
        <div className="cards flex flex-col gap-[10px]">
          <ScheduleCards />
        </div>
      </main>
      <ScheduleAside />
    </Grid>
  );
}
