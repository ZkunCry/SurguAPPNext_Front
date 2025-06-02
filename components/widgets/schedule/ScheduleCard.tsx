"use client";
import React from "react";
import Image from "next/image";
import Teach from "../../../assets/teach.svg";
import Map from "../../../assets/map.svg";
import Zametka from "../../../assets/zametka.svg";
import type { Lesson } from "@/types/schedule";
import { cn } from "@/utils/utils";
interface IScheduleCard {
  pair: Lesson;
  subGroup: string;
  onClick?: () => void;
}

const ScheduleCard: React.FC<IScheduleCard> = ({ pair, onClick, subGroup }) => {
  return (
    <div
      className={cn(
        "flex flex-col p-[10px]  rounded-[10px] gap-[10px] cursor-pointer",
        +subGroup !== pair.subGroup && +subGroup !== 0 ? "opacity-25" : ""
      )}
      onClick={() => onClick && onClick()}
    >
      <div className="py-[15px] px-[10px] bg-background rounded-[10px]">
        <div className="flex justify-between items-center pb-[15px] border-b border-border">
          <span className="flex-1">{pair.name.replace(/[0-9]/g, "")}</span>
          <div className="flex items-center gap-[10px]">
            <span className="p-[5px] bg-primary text-white rounded-[3px] text-sm">
              {pair.type}
            </span>
            {!!pair.subGroup && (
              <span
                className={`p-[5px] rounded-[3px] text-white ${
                  pair.subGroup === 1 ? "bg-group" : "bg-[#0D9739]"
                }  text-sm`}
              >
                {`п/г ${pair.subGroup}`}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-[7px] py-[15px] border-b border-border">
          <div className="inline-flex items-center gap-[10px]">
            <Image src={Map} alt="map" />
            <span>{pair.cabinet}</span>
          </div>
          <div className="inline-flex items-center gap-[10px]">
            <Image src={Teach} alt="teacher" />
            <span>{pair.teacherId ? pair.teacherId : "Нет преподавателя"}</span>
          </div>
        </div>
        <div className="flex items-center gap-[10px] text-ellipsis overflow-hidden pt-[15px]">
          <Image src={Zametka} alt="note" />
          <span className="text-ellipsis overflow-hidden text-nowrap">
            Заметки нет
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
