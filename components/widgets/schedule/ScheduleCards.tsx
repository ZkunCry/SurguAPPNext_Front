"use client";
import React from "react";
import ScheduleCard from "./ScheduleCard";
import useScheduleStore from "@/store/useSchedule";
import { useGetScheduleByGroup } from "@/query-hooks/schedule";
import { motion } from "framer-motion";
const ScheduleCards = () => {
  const scheduleDay = useScheduleStore((state) => state.scheduleDay || null);
  const group = useScheduleStore((state) => state.group || null);
  const {
    data: schedule,
    isFetching,
    isLoading,
  } = useGetScheduleByGroup(group, {
    enabled: group !== null,
    refetchOnWindowFocus: false,
  });
  const currentDay = schedule
    ?.filter((pair) => pair.day === scheduleDay?.day.toUpperCase())
    .sort((a, b) => a.position - b.position);

  return (
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
          {/* {pair.subGroup  } */}
          <div></div>
          <h2>{pair.position} пара</h2>
          <ScheduleCard pair={pair} />
        </div>
      ))}
    </motion.div>
  );
};

export default ScheduleCards;
