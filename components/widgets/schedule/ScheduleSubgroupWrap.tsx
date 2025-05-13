"use client";
import React from "react";
import { useEffect, useState } from "react";
import useScheduleStore from "@/store/useSchedule";
import SelectMenu from "../select/Select";
import ScheduleWrapSkeleton from "./ScheduleWrapSkeleton";
const ScheduleSubgroupWrap = ({ subGroups }) => {
  const [selectedSubGroup, setSelected] = useState<string | null>();
  const { setSubGroup } = useScheduleStore();
  useEffect(() => {
    if (typeof window !== undefined) {
      setSelected(localStorage.getItem("subgroup"));
    }
  }, []);
  console.log(selectedSubGroup);
  useEffect(() => {
    if (selectedSubGroup !== undefined) {
      setSubGroup(selectedSubGroup);
      localStorage.setItem("subgroup", selectedSubGroup);
    }
  }, [selectedSubGroup]);

  return selectedSubGroup === undefined ? (
    <ScheduleWrapSkeleton />
  ) : (
    <SelectMenu
      value={selectedSubGroup}
      onChange={setSelected}
      placeholder="Выберите подгруппу"
      options={subGroups}
    />
  );
};

export default ScheduleSubgroupWrap;
