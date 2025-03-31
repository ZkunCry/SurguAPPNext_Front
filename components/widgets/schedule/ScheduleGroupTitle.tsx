"use client";
import React, { useEffect, useState } from "react";

const ScheduleGroupTitle = () => {
  const [group, setGroup] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== undefined) setGroup(localStorage.getItem("group"));
  }, []);
  return (
    <div className="inline-flex items-center gap-[10px] text-text">
      <h1>
        Группа:{" "}
        {group === null ? (
          "Выберите группу"
        ) : (
          <span className="text-[16px]">{group}</span>
        )}{" "}
      </h1>
    </div>
  );
};

export default ScheduleGroupTitle;
