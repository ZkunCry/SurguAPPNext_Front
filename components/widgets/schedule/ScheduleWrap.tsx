"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import SelectMenu from "../select/Select";
import useScheduleStore from "@/store/useSchedule";
const SelectMenuWrap = ({ items }) => {
  const [selectedGroup, setSelected] = useState<string | null>();
  const { setGroup } = useScheduleStore();
  useEffect(() => {
    if (typeof window !== undefined) {
      setSelected(localStorage.getItem("group"));
    }
  }, []);
  useEffect(() => {
    setGroup(selectedGroup);
    localStorage.setItem("group", selectedGroup);
  }, [selectedGroup]);
  return (
    <SelectMenu
      value={selectedGroup}
      onChange={setSelected}
      placeholder="Выберите группу"
      options={items}
    />
  );
};

export default SelectMenuWrap;
