import Title from "@/components/widgets/main/Title";
import Search from "../../../assets/search.svg";
import Image from "next/image";
import ScheduleAside from "@/components/widgets/main/ScheduleAside";
import Link from "next/link";
import ScheduleSlider from "@/components/widgets/scheduleSlider/ScheduleSlider";

export default function SchedulePage() {
  return (
    <>
      <main className="flex flex-col w-full gap-[10px] overflow-hidden">
        <Title
          className="md:bg-maincolor transition-all duration-200 rounded-[10px]"
          page="Расписание"
        >
          <Image src={Search} alt="search" />
        </Title>
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
      </main>
      <ScheduleAside />
    </>
  );
}
