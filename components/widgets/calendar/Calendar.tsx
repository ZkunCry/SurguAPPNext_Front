"use client";
import React from "react";
import type { ScheduleByDay } from "@/types/schedule";
import { daysOfWeek, type Calendar } from "@/utils/fillCurrentMonth";
import { pairTimes } from "@/utils/schedule";
import Modal from "../modal/Modal";
import SidebarCalendar from "./SidebarCalendar";
import { useQuery } from "@tanstack/react-query";
import { CalendarService } from "@/services/calendar/calendar";
import useScheduleStore from "@/store/useSchedule";

const currentMonthYear = CalendarService.getCurrentMonthYear();

const Calendar = () => {
  const group = useScheduleStore((state) => state.group);
  const currentMonth = CalendarService.getCorrectCurrentMonth();

  const { data: schedule, isLoading } = useQuery({
    queryKey: ["calendar", group],
    queryFn: () => CalendarService.getCalendar(group),
    refetchOnWindowFocus: false,
    enabled: group !== null,
  });

  // Заголовки дней недели (Пн-Сб)
  const daysHeader = daysOfWeek.map(
    (day) =>
      day !== "Вс" && (
        <div
          key={day}
          className="bg-maincolor border dark:border-gray-700 border-gray-200 rounded-lg p-3 text-center text-xs text-gray-500 relative "
        >
          {day}
        </div>
      )
  );

  if (group === null) {
    return <SidebarCalendar />;
  }

  const scheduleByDay: ScheduleByDay = schedule
    ? CalendarService.scheduleByday(schedule)
    : ({} as ScheduleByDay);

  return (
    <div className="w-full flex bg-maincolor relative">
      <SidebarCalendar />

      {/* Основное содержимое */}
      <main className="flex-1 overflow-auto p-6">
        {/* Заголовок календаря */}
        {isLoading ? (
          <div className="flex items-center mb-6 gap-4">
            <div className="hidden md:flex gap-1">
              <div className="h-8 w-12 bg-gray-200 rounded-sm animate-pulse"></div>
              <div className="h-8 w-20 bg-gray-200 rounded-sm animate-pulse"></div>
              <div className="h-8 w-12 bg-gray-200 rounded-sm animate-pulse"></div>
            </div>
            <div className="h-8 w-40 bg-gray-200 rounded-sm animate-pulse"></div>
          </div>
        ) : (
          <div className="flex items-center mb-6 gap-4">
            <h2 className="text-xl font-semibold text-text">
              {currentMonthYear}
            </h2>
          </div>
        )}

        {/* Сетка календаря */}
        <div className="grid grid-cols-6 gap-px bg-gray-200 dark:bg-gray-700">
          {daysHeader}

          {isLoading
            ? currentMonth.map(
                (day, i) =>
                  day.day !== "Вс" && (
                    <div
                      key={i}
                      className="flex flex-col gap-[10px] bg-maincolor min-h-[400px] md:min-h-[700px] relative border-r dark:border-gray-700 border-gray-200 p-2"
                    >
                      {day.day && (
                        <div className="font-medium mb-2">
                          <div className="h-6 w-6 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                      )}
                      <div className="space-y-2">
                        {[1, 2, 3].map((_, index) => (
                          <div
                            key={index}
                            className="h-24 bg-gray-200 animate-pulse rounded"
                          ></div>
                        ))}
                      </div>
                    </div>
                  )
              )
            : // Реальное расписание
              currentMonth.map(
                (day, i) =>
                  day.day !== "Вс" && (
                    <div
                      key={i}
                      className={`flex flex-col gap-[10px] bg-maincolor min-h-[400px] md:min-h-[700px] relative border-r dark:border-gray-700 border-gray-200 p-2  `}
                    >
                      {day.day && (
                        <div className="font-medium mb-2">{day.number}</div>
                      )}

                      {scheduleByDay[day.day.toUpperCase()] !== undefined
                        ? scheduleByDay[day.day.toUpperCase()]?.map(
                            (week, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`flex flex-col gap-[10px] left-1 right-1 bg-primary border-l-4 ${
                                    week.subGroup === 1
                                      ? "border-l-primary"
                                      : week.subGroup === 2
                                      ? "border-l-[#0D9739]"
                                      : "border-l-amber-500"
                                  }  rounded-sm p-2  text-sm  min-h-[120px]`}
                                >
                                  <div className="flex font-medium">
                                    <div className="w-full flex justify-between  items-center text-[10px] font-semibold">
                                      <span className="p-[3px] bg-maincolor rounded-lg">
                                        {week.cabinet}
                                      </span>
                                      <span className="text-white">
                                        {pairTimes[week.position - 1].start} -
                                        {pairTimes[week.position - 1].end}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <h5 className="font-semibold text-white">
                                      {week.name}
                                    </h5>
                                  </div>
                                  <div className="flex flex-col gap-[4px] text-[10px]  font-medium leading-[14px] ">
                                    <span className="text-white dark:text-text">
                                      {week.type}
                                      {week.subGroup
                                        ? ` | п/г ${week.subGroup}`
                                        : ""}{" "}
                                    </span>
                                    <span className="text-white dark:text-text">
                                      {week.teacher
                                        ? `${week.teacher.surname} ${week.teacher.name} ${week.teacher.middleName}`
                                        : "Информация отсутствует"}
                                    </span>
                                  </div>
                                </div>
                              );
                            }
                          )
                        : ""}
                    </div>
                  )
              )}
        </div>
      </main>
      <Modal />
    </div>
  );
};

export default Calendar;
