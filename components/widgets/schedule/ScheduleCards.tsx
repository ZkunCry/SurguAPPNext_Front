import { groupByName } from "@/utils/groupByName";
import React from "react";
import ScheduleCard from "./ScheduleCard";
const pairsData = [
  {
    name: "1",
    time: "8:30 - 9:50",
    subject: "Объектно ориентированное программирование",
    type: "Практика",
    group: "п/г 1",
    room: "У903",
    teacher: "Гришмановский Павел Валерьевич",
    note: "Заметка: контрольная работа",
  },
  {
    name: "1",
    time: "8:30 - 9:50",
    subject: "Математический анализ",
    type: "Лекция",
    group: "п/г 2",
    room: "У104",
    teacher: "Иванов Иван Иванович",
    note: "Заметка: повторение темы",
  },
  {
    name: "2",
    time: "10:00 - 11:20",
    subject: "Математический анализ",
    type: "Лекция",
    group: "п/г 2",
    room: "У104",
    teacher: "Иванов Иван Иванович",
    note: "Заметка: повторение темы",
  },
  {
    name: "2",
    time: "10:00 - 11:20",
    subject: "Математический анализ",
    type: "Лекция",
    group: "п/г 2",
    room: "У104",
    teacher: "Иванов Иван Иванович",
    note: "Заметка: повторение темы",
  },
  {
    name: "3",
    time: "10:00 - 11:20",
    subject: "Математический анализ",
    type: "Лекция",
    group: "п/г 2",
    room: "У104",
    teacher: "Иванов Иван Иванович",
    note: "Заметка: повторение темы",
  },
];
const ScheduleCards = () => {
  const result = groupByName(pairsData);
  console.log(result[3]);
  return result.map((paisrArr, id) => (
    <div
      key={id}
      className="flex  flex-col card  p-[10px] bg-maincolor  rounded-[10px] gap-[10px]"
    >
      <div className="flex  justify-between">
        <h1>{`${paisrArr[0].name} пара`}</h1>
        <h1>{paisrArr[0].time}</h1>
      </div>
      {paisrArr.map((pair, index) => (
        <ScheduleCard key={index} pair={pair} />
      ))}
    </div>
  ));
};

export default ScheduleCards;
