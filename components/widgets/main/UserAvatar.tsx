"use client";
import { useGetUserById } from "@/query-hooks/user";
import useUserStore from "@/store/useUser";
import React, { useEffect, useState } from "react";

const UserAvatar = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const getUser = useUserStore((state) => state.getUserByStorage);
  const { data, isLoading, isFetching } = useGetUserById(userId, {
    enabled: userId === null ? false : true,
  });
  useEffect(() => {
    const id = getUser();
    setUserId(id);
  }, []);
  console.log(isFetching, data);
  return (
    <div className="user flex items-center gap-[9px]">
      <div className="w-[38px] h-[38px] bg-grey rounded-full" />
      <span>
        {isLoading
          ? "Loading..."
          : `${data?.name} ${data?.surname} ${data?.middleName}`}
      </span>
    </div>
  );
};

export default UserAvatar;
