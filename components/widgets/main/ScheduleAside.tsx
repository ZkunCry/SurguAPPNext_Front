import Sidebar from "@/components/ui/sidebar";
import React from "react";
import Map from "../../../assets/map.svg";
import Image from "next/image";
const ScheduleAside = async () => {
  return (
    <Sidebar className="flex flex-col max-w-[280px] min-w-[280px] w-full max-h-[567px] overflow-auto bg-maincolor rounded-[10px]">
      <div className="title p-[10px] border-b border-border">
        <h1 className="text-[18px]">Расписание звонков</h1>
      </div>
      <div className="flex flex-col gap-[20px] p-[10px]">
        {/* Корпусы «А», «Г», «К», «У» */}
        <div className="flex flex-col">
          <div className="flex gap-[10px]">
            <Image src={Map} alt="Карта" />
            <span className="text-text">Корпусы «А», «Г», «К», «У»</span>
          </div>
          <ul className="flex flex-col px-[30px] text-text">
            <li>1 пара 08:30-09:50 перерыв 10 минут</li>
            <li>2 пара 10:00-11:20 перерыв 10 минут</li>
            <li>3 пара 11:30-12:50 перерыв 30 минут</li>
            <li>4 пара 13:20-14:40 перерыв 10 минут</li>
            <li>5 пара 14:50-16:10 перерыв 10 минут</li>
            <li>6 пара 16:20-17:40 перерыв 20 минут</li>
            <li>7 пара 18:00-19:20 перерыв 10 минут</li>
            <li>8 пара 19:30-20:50</li>
          </ul>
        </div>

        {/* Медицинский колледж */}
        <div className="flex flex-col">
          <div className="flex gap-[10px]">
            <Image src={Map} alt="Медицинский колледж" />
            <span className="text-text">Медицинский колледж</span>
          </div>
          <ul className="flex flex-col px-[30px] text-text">
            <li>1 пара 08:00-09:35 перерыв 10 минут</li>
            <li>2 пара 09:45-11:20 перерыв 30 минут</li>
            <li>3 пара 11:50-13:25 перерыв 30 минут</li>
            <li>4 пара 13:55-15:30 перерыв 20 минут</li>
            <li>5 пара 15:50-17:25 перерыв 10 минут</li>
            <li>6 пара 17:35-19:10</li>
          </ul>
        </div>

        {/* Спорткомплекс «Дружба» */}
        <div className="flex flex-col">
          <div className="flex gap-[10px]">
            <Image src={Map} alt="Спорткомплекс «Дружба»" />
            <span className="text-text">Спорткомплекс «Дружба»</span>
          </div>
          <ul className="flex flex-col px-[30px] text-text">
            <li>1 пара 09:00-10:20 перерыв 10 минут</li>
            <li>2 пара 10:30-11:50 перерыв 10 минут</li>
            <li>3 пара 12:00-13:20 перерыв 10 минут</li>
            <li>4 пара 13:30-14:50 перерыв 10 минут</li>
            <li>5 пара 15:00-16:20 перерыв 10 минут</li>
            <li>6 пара 16:30-17:50</li>
          </ul>
        </div>

        {/* Плавательный бассейн «Водолей» */}
        <div className="flex flex-col">
          <div className="flex gap-[10px]">
            <Image src={Map} alt="Плавательный бассейн «Водолей»" />
            <span className="text-text">Плавательный бассейн «Водолей»</span>
          </div>
          <ul className="flex flex-col px-[30px] text-text">
            <li>1 пара 11:00-11:45</li>
            <li>2 пара 11:45-12:30</li>
            <li>3 пара 12:30-13:15</li>
            <li>4 пара 13:15-14:00</li>
          </ul>
        </div>
      </div>
    </Sidebar>
  );
};

export default ScheduleAside;
