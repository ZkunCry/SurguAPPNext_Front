"use client";
import { useGetUserById } from "@/query-hooks/user";
import useUserStore from "@/store/useUser";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

const UserAvatar = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const { getUser, setUser } = useUserStore(
    useShallow((state) => ({
      getUser: state.getUserByStorage,
      setUser: state.setCredentials,
    }))
  );
  const { data, isLoading, isFetching } = useGetUserById(userId, {
    enabled: userId === null ? false : true,
    onSuccess: (data) => {
      console.log("fdsfds");
      setUser(data);
    },
  });
  useEffect(() => {
    const id = getUser();
    setUserId(id);
  }, []);
  console.log(userId);
  return (
    <div
      className="user flex items-center gap-[9px] cursor-pointer"
      onClick={() => redirect("/settings")}
    >
      <div className="w-[38px] h-[38px] bg-grey rounded-full" />
      <span>
        {userId !== null ? (
          isLoading ? (
            "Loading..."
          ) : (
            `${data?.name} ${data?.surname} ${data?.middleName}`
          )
        ) : (
          <Link href={"/signin"}>Войти в систему</Link>
        )}
      </span>
    </div>
  );
};

export default UserAvatar;
