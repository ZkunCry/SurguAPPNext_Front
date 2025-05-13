import React, { useState } from "react";
import TitleWithSearch from "../main/TitleWithSearch";

import ScheduleSlider from "../schedule/ScheduleSlider";
import ScheduleCards from "./ScheduleCards";
import SelectMenuWrap from "./ScheduleWrap";
import ScheduleSubgroupWrap from "./ScheduleSubgroupWrap";
import ScheduleGroupTitle from "./ScheduleGroupTitle";
const subGroups = [
  { label: "Общая", value: "0" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
];

const ScheduleMain = ({ groups }) => {
  return (
    <main className="flex flex-col w-full gap-[10px] overflow-hidden fade-in ">
      <TitleWithSearch page="Расписание" placeholder="Поиск учебной группы" />
      <div className="flex flex-col bg-maincolor mt-[5px]  rounded-[10px] px-[10px] pt-[20px] pb-[30px] gap-[30px]">
        <div className="flex flex-1 justify-between items-center text-[18px]">
          <ScheduleGroupTitle />
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
