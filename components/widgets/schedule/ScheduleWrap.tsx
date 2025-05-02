"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import SelectMenu from "../select/Select";
import useScheduleStore from "@/store/useSchedule";
import ScheduleWrapSkeleton from "./ScheduleWrapSkeleton";
const SelectMenuWrap = ({ items }) => {
  const [selectedGroup, setSelected] = useState<string | null>();
  const { setGroup } = useScheduleStore();
  useEffect(() => {
    if (typeof window !== undefined) {
      const result = localStorage.getItem("group");
      console.log(result);
      setSelected(result);
    }
  }, []);

  useEffect(() => {
    if (selectedGroup !== undefined) {
      setGroup(selectedGroup);
      localStorage.setItem("group", selectedGroup);
    }
  }, [selectedGroup]);
  return selectedGroup === undefined ? (
    <ScheduleWrapSkeleton />
  ) : (
    <SelectMenu
      isSearchable
      value={selectedGroup}
      onChange={setSelected}
      placeholder="Выберите группу"
      options={items}
    />
  );
};

export default SelectMenuWrap;
