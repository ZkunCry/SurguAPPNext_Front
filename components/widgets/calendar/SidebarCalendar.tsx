import React, { useEffect, useState } from "react";
// import useModal from "@/store/useModal";
import Sidebar from "@/components/ui/sidebar";
import SelectMenuWrap from "../schedule/ScheduleWrap";
import { ScheduleService } from "@/services/schedule/schedule";
import { Group } from "@/types/schedule";
const SidebarCalendar = () => {
  const [groups, setGroups] = useState();
  useEffect(() => {
    const getGroups = async () => {
      const data = await fetch("http://localhost:3001/schedule/group", {
        cache: "no-cache",
      });
      const groups = await data.json().then((res: Group[]) => {
        return ScheduleService.transformGroup(res);
      });

      setGroups(groups);
    };
    getGroups();
  }, []);

  return (
    <>
      <Sidebar className="hidden md:block w-64 border-r border-border p-4 bg-maincolor">
        <div className="text-xl text-center font-medium mb-4">Календарь</div>
        <button
          className="w-full bg-primary text-white py-2 px-4 rounded-full mb-6 "
          // onClick={() => openModal("CREATE_NOTE")}
        >
          Создать заметку
        </button>
        <div className="flex flex-col gap-3">
          <span>Группа</span>
          <SelectMenuWrap items={groups} />
        </div>
      </Sidebar>
    </>
  );
};

export default SidebarCalendar;
