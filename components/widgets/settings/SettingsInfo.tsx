"use client";
import useUserStore from "@/store/useUser";
import React from "react";

const SettingsInfo = () => {
  const user = useUserStore((state) => state.user);
  console.log(user);
  return (
    user && (
      <div className="flex flex-col w-full items-center ">
        <div className="bg-[#A6A9B5] w-[100px] aspect-square rounded-full my-[30px]"></div>
        <div className="w-full items-center flex flex-col border-b border-border gap-[10px]">
          <h1 className="text-lg">{`${user.surname} ${user.name} ${user.middleName}`}</h1>
          <h1 className="text-]16px] text-primary p-[10px] rounded-lg mb-[10px] bg-accent">
            {user.email}
          </h1>
        </div>
      </div>
    )
  );
};

export default SettingsInfo;
