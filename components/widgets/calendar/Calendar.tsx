"use client";
import Sidebar from "@/components/ui/sidebar";
import type { Lesson, Schedule } from "@/types/schedule";
import { fillCurrentMonth, type Calendar } from "@/utils/fillCurrentMonth";
import { pairTimes } from "@/utils/schedule";
import React from "react";
import ModalCalendarCreate from "./ModalCalendarCreate";
import Modal from "../modal/Modal";
import SidebarCalendar from "./SidebarCalendar";
type ScheduleByDay = {
  [key: string]: Lesson[];
};
const getCorrectCurrentMonth = (): Calendar => {
  const currentMonth = fillCurrentMonth();
  const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  const index = days.findIndex((day, index) => {
    return day === currentMonth[0].day.toUpperCase();
  });
  return [
    ...Array(index).fill({
      day: "",
    }),
    ...currentMonth,
  ];
};
const Calendar = ({ schedule }: { schedule: Schedule }) => {
  const scheduleByDay: ScheduleByDay = schedule.reduce((acc, item) => {
    const day = item.day;
    if (!acc[day]) acc[day] = [];
    acc[day].push(item);
    return acc;
  }, {});

  const currentMonth = getCorrectCurrentMonth();

  return (
    <div className="w-full flex h-screen bg-white  relative">
      <SidebarCalendar />

      {/* Основное содержимое */}
      <main className="flex-1 overflow-auto p-6">
        {/* Заголовок календаря */}
        <div className="flex items-center mb-6 gap-4">
          <div className="hidden md:flex gap-1">
            <button className="px-3 py-1 border rounded-sm hover:bg-gray-100">
              ‹
            </button>
            <button className="px-3 py-1 border rounded-sm hover:bg-gray-100">
              Сегодня
            </button>
            <button className="px-3 py-1 border rounded-sm hover:bg-gray-100">
              ›
            </button>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Сентябрь 2023</h2>
        </div>

        {/* Сетка календаря */}
        <div className="grid grid-cols-7 bg-gray-200 gap-px">
          {/* Заголовки дней */}
          {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
            <div
              key={day}
              className="bg-white p-3 text-center text-xs text-gray-500 relative top-0 z-10"
            >
              {day}
            </div>
          ))}

          {/* Колонки дней */}
          {currentMonth.map((day, i) => (
            <div
              key={i}
              className={`flex flex-col gap-[10px] bg-white min-h-[400px] md:min-h-[700px] relative border-r border-gray-200 p-2 ${
                !day.day ? "bg-gray-100!" : ""
              } `}
            >
              {day.day && <div className="font-medium mb-2">{day.number}</div>}

              {scheduleByDay[day.day.toUpperCase()] !== undefined
                ? scheduleByDay[day.day.toUpperCase()]?.map((week, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col  gap-[10px] left-1 right-1 bg-blue-50 border-l-4 border-l-primary rounded-sm p-2  text-sm  min-h-[120px]"
                      >
                        <div className="flex font-medium">
                          <div className="w-full flex justify-between  items-center text-[10px] font-semibold">
                            <span className="p-[3px] bg-maincolor rounded-lg">
                              {week.cabinet}
                            </span>
                            <span>
                              {pairTimes[week.position - 1].start} -
                              {pairTimes[week.position - 1].end}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold">{week.name}</h5>
                        </div>
                        <div className="flex flex-col gap-[4px] text-[10px] font-medium leading-[14px] ">
                          <span>
                            {week.type}
                            {week.subGroup
                              ? ` | п/г ${week.subGroup}`
                              : ""}{" "}
                          </span>
                          <span>
                            {week.teacherId ?? "Информация отсутствует"}
                          </span>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          ))}
        </div>
      </main>
      <Modal />
    </div>
  );
};

export default Calendar;
