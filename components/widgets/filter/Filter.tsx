import Badge from "@/components/ui/badge";
import Sidebar from "@/components/ui/sidebar";
import { cn } from "@/utils/utils";
import React from "react";
import { HTMLAttributes } from "react";
interface FilterProps extends HTMLAttributes<HTMLElement> {
  className?: string; // Дополнительные классы для стилизации
}
const Filter: React.FC<FilterProps> = ({ className }) => {
  return (
    <Sidebar
      className={cn(
        className,
        "flex flex-col  max-w-[280px] min-w-[280px] w-full h-fit bg-maincolor rounded-[10px]"
      )}
    >
      <div className="title p-[10px] border-b border-border">
        <h1 className="text-[18px]"> Фильтры</h1>
      </div>
      <div className="flex flex-col gap-[33px] p-[10px]">
        <div className="flex flex-col gap-[15px]">
          <h1>По событиям и новостям</h1>
          <div className="flex flex-wrap gap-x-[5px] gap-y-[10px]">
            <Badge>Тест</Badge>
            <Badge>Тест</Badge>
            <Badge>Тест</Badge>
            <Badge>Тест</Badge>
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <h1>По событиям и новостям</h1>
          <div className="flex flex-wrap gap-x-[5px] gap-y-[10px]">
            <Badge>Тест</Badge>
            <Badge>Тест</Badge>
            <Badge>Тест</Badge>
          </div>
        </div>

        <div className="flex flex-col gap-[15px]">
          <h1>По событиям и новостям</h1>
          <div className="flex flex-wrap gap-x-[5px] gap-y-[10px]">
            <Badge>Тест</Badge>
            <Badge>Тест</Badge>
            <Badge>Тест</Badge>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Filter;
