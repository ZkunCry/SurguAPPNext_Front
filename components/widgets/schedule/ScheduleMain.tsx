"use client";
import TitleWithSearch from "../main/TitleWithSearch";
import ScheduleSlider from "../schedule/ScheduleSlider";
import ScheduleCards from "./ScheduleCards";
import SelectMenuWrap from "./ScheduleWrap";
import ScheduleSubgroupWrap from "./ScheduleSubgroupWrap";
import ScheduleGroupTitle from "./ScheduleGroupTitle";
import useModal from "@/store/useModal";
import { subGroups } from "@/utils/schedule";

const ScheduleMain = ({ groups }) => {
  return (
    <main className="flex flex-col w-full gap-[10px] overflow-hidden fade-in ">
      <TitleWithSearch page="Расписание" placeholder="Поиск учебной группы" />
      <div className="flex flex-col bg-maincolor mt-[5px]  rounded-[10px] px-[10px] pt-[20px] pb-[30px] gap-[30px]">
        <div className="flex flex-1 gap-3 justify-between items-center text-[18px]">
          <ScheduleGroupTitle />
          <ButtonFilter />
        </div>
        <SelectMenuWrap items={groups} />
        <ScheduleSubgroupWrap subGroups={subGroups} />

        <div className="inline-flex">Неделя 1 | числитель</div>
        <ScheduleSlider />
      </div>
      <div className="cards flex flex-col gap-[10px]">
        <ScheduleCards />
      </div>
    </main>
  );
};

export default ScheduleMain;

const ButtonFilter = () => {
  const { openModal } = useModal();
  return (
    <button
      className="text-primary font-medium cursor-pointer"
      onClick={() => openModal("FILTER_SCHEDULE")}
    >
      Фильтры
    </button>
  );
};
