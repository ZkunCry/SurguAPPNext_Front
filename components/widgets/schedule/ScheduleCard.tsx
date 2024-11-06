"use client";
import React from "react";
import Image from "next/image";
import Teach from "../../../assets/teach.svg";
import Map from "../../../assets/map.svg";
import Zametka from "../../../assets/zametka.svg";
import type { Pair } from "@/types/schedule";
interface IScheduleCard {
  pair: Pair;
  onClick?: () => void;
}
const ScheduleCard: React.FC<IScheduleCard> = ({ pair, onClick }) => {
  return (
    <div
      className="flex flex-col card p-[10px]  rounded-[10px] gap-[10px] cursor-pointer"
      onClick={() => onClick && onClick()}
    >
      <div className="py-[15px] px-[10px] bg-background rounded-[10px]">
        <div className="flex justify-between items-center pb-[15px] border-b border-border">
          <span className="flex-1">{pair.subject}</span>
          <div className="flex items-center gap-[10px]">
            <span className="p-[5px] bg-primary text-white rounded-[3px] text-sm">
              {pair.type}
            </span>
            <span className="p-[5px] rounded-[3px] text-white bg-group text-sm">
              {pair.group}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-[7px] py-[15px] border-b border-border">
          <div className="inline-flex items-center gap-[10px]">
            <Image src={Map} alt="map" />
            <span>{pair.room}</span>
          </div>
          <div className="inline-flex items-center gap-[10px]">
            <Image src={Teach} alt="teacher" />
            <span>{pair.teacher}</span>
          </div>
        </div>
        <div className="flex items-center gap-[10px] text-ellipsis overflow-hidden pt-[15px]">
          <Image src={Zametka} alt="note" />
          <span className="text-ellipsis overflow-hidden text-nowrap">
            {pair.note}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
