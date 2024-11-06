"use client";
import { cn } from "@/utils/utils";
import React, { type HTMLAttributes } from "react";
interface IUserProps extends HTMLAttributes<HTMLElement> {
  name: string;
  department?: string;
  onClick?: () => void;
}
const User: React.FC<IUserProps> = ({
  className,
  name,
  department,
  onClick,
}) => {
  return (
    <div
      className={cn(className, "flex max-w-full w-full gap-[10px] py-[9px]")}
      onClick={() => onClick && onClick()}
    >
      <div className="flex w-full gap-[10px] px-[15px] ">
        <div className="w-[60px] min-w-[60px] aspect-square rounded-full bg-[#A6A9B5]" />
        <div className="flex flex-col w-full justify-center gap-[8px] text-ellipsis overflow-hidden text-text">
          <h1>{name}</h1>
          {department && (
            <span className="whitespace-nowrap text-ellipsis overflow-hidden">
              {department}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
