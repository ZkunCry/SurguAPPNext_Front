"use client";
import React from "react";
import { useEffect, useState } from "react";
import useScheduleStore from "@/store/useSchedule";
import SelectMenu from "../select/Select";
const ScheduleSubgroupWrap = ({ subGroups }) => {
  console.log(subGroups);
  const [selectedSubGroup, setSelected] = useState<string | null>();
  const { setSubGroup } = useScheduleStore();
  useEffect(() => {
    if (typeof window !== undefined) {
      setSelected(localStorage.getItem("subgroup"));
    }
  }, []);
  useEffect(() => {
    setSubGroup(selectedSubGroup);
    localStorage.setItem("subgroup", selectedSubGroup);
  }, [selectedSubGroup]);
  return (
    <SelectMenu
      value={selectedSubGroup}
      onChange={setSelected}
      placeholder="Выберите подгруппу"
      options={subGroups}
    />
  );
};

export default ScheduleSubgroupWrap;
