import Badge from "@/components/ui/badge";
import Sidebar from "@/components/ui/sidebar";
import React from "react";

const Filter = () => {
  return (
    <Sidebar className="flex flex-col  max-w-[280px] min-w-[280px] w-full h-fit bg-maincolor rounded-[10px]">
      <div className="title p-[10px] border-b">
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
