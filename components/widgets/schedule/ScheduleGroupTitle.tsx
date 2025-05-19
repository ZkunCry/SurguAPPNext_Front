"use client";
import React, { useEffect, useState } from "react";
import useUserStore from "@/store/useUser";
import Link from "next/link";
const ScheduleGroupTitle = () => {
  const [group, setGroup] = useState<string | null>(null);
  const { user } = useUserStore((state) => state);
  useEffect(() => {
    if (typeof window !== undefined) setGroup(localStorage.getItem("group"));
  }, []);

  return (
    <div className="w-full flex items-center gap-[10px] text-text">
      {group === null ? (
        <h1 className="w-[200px] min-h-[27px] rounded-md  animate-pulse bg-gray-200">
          <span></span>
        </h1>
      ) : (
        <div className="w-full flex items-center justify-between">
          <h1>
            Группа:{" "}
            {group === null ? (
              "Выберите группу"
            ) : (
              <span className="text-[16px]">{group}</span>
            )}
          </h1>
          {user && (
            <Link className="text-primary font-medium" href={"/calendar"}>
              Календарь
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default ScheduleGroupTitle;
