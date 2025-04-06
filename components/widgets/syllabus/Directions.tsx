"use client";
import type { StudyPlanResponse } from "@/types/studyPlan";
import { useSearchParams } from "next/navigation";
import React from "react";
interface DirectionsProps {
  directions: StudyPlanResponse;
}

const Directions = ({ directions }: DirectionsProps) => {
  const course = useSearchParams().get("course");
  const firstSemester = directions.filter(
    (c) => c.semester === "1" && c.name.course === +course
  );
  const secondSemester = directions.filter(
    (c) => c.semester === "2" && c.name.course === +course
  );
  return course ? (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[15px]">
        <h2 className="font-semibold text-[22px]"> 1 семестр </h2>
        <ul className="grid md:grid-cols-1 lg:grid-cols-2 gap-[15px]  ">
          {firstSemester.map((c) => (
            <li
              className="fade-in min-h-[100px] flex items-center justify-between rounded-[12px] border border-[#e4e8f6] shadow-md bg-white p-[10px] gap-[10px]"
              key={c.id}
            >
              <span>{c.name.name}</span>
              <div
                className={`self-start w-[90px] p-[3px] text-center ${
                  c.infoData.includes("За") ? "bg-[#292A2D]" : "bg-primary"
                } dark:text-black  text-white rounded-[10px]`}
              >
                <span className={`text-[14px] `}>{c.infoData}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-[15px]">
        <h2 className="font-semibold text-[22px]">2 семестр</h2>
        <ul className="grid md:grid-cols-1 lg:grid-cols-2 gap-[15px]">
          {secondSemester.map((c) => (
            <li
              className="fade-in min-h-[100px] flex items-center justify-between rounded-[12px] border border-[#e4e8f6] shadow-md bg-white p-[10px] gap-[10px]"
              key={c.id}
            >
              <span>{c.name.name}</span>
              <div
                className={`self-start w-[90px] p-[3px] text-center ${
                  c.infoData.includes("За") ? "bg-[#292A2D]" : "bg-primary"
                } dark:text-black  text-white rounded-[10px]`}
              >
                <span className={`text-[14px] `}>{c.infoData}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <h2>Выберите курс</h2>
  );
};

export default Directions;
