"use client";
import React from "react";
import ScheduleCard from "./ScheduleCard";
import useScheduleStore from "@/store/useSchedule";
import { useGetScheduleByGroup } from "@/query-hooks/schedule";
import { motion } from "framer-motion";
import { useShallow } from "zustand/shallow";
const ScheduleCards = () => {
  const scheduleDay = useScheduleStore((state) => state.scheduleDay || null);
  const { group, subGroup } = useScheduleStore(
    useShallow((state) => ({
      group: state.group,
      subGroup: state.subGroup,
    }))
  );
  const { data: schedule, isFetching } = useGetScheduleByGroup(group, {
    enabled: group !== null,
    refetchOnWindowFocus: false,
  });
  const currentDay = schedule
    ?.filter((pair) => pair.day === scheduleDay?.day.toUpperCase())
    .sort((a, b) => a.position - b.position);
  return isFetching ? (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col h-[250px]  p-[10px] bg-maincolor rounded-[10px] gap-[10px]">
        <h2 className="w-full h-[20px] animate-pulse bg-gray-200 rounded-[10px]"></h2>
        <h2 className="w-full h-full animate-pulse bg-gray-200 rounded-[10px]"></h2>
      </div>
      <div className="flex flex-col h-[250px]  p-[10px] bg-maincolor rounded-[10px] gap-[10px]">
        <h2 className="w-full h-[20px] animate-pulse bg-gray-200 rounded-[10px]"></h2>
        <h2 className="w-full h-full animate-pulse bg-gray-200 rounded-[10px]"></h2>
      </div>
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-[10px] fade-in "
    >
      {currentDay?.map((pair) => (
        <div
          key={pair.id}
          className="flex flex-col p-[10px] bg-maincolor rounded-[10px] gap-[10px] fade-in"
        >
          <div></div>
          <h2>{pair.position} пара</h2>
          <ScheduleCard subGroup={subGroup} pair={pair} />
        </div>
      ))}
    </motion.div>
  );
};

export default ScheduleCards;
