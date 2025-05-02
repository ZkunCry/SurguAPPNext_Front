"use client";
import { useGetUserById } from "@/query-hooks/user";
import useUserStore from "@/store/useUser";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

const UserAvatar = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const { getUser, setUser } = useUserStore(
    useShallow((state) => ({
      getUser: state.getUserByStorage,
      setUser: state.setCredentials,
    }))
  );

  const { data, isLoading } = useGetUserById(userId, {
    enabled: !!userId,
    onSuccess: (data) => {
      setUser(data);
    },
  });

  useEffect(() => {
    const id = getUser();
    setUserId(id);
    setIsInitializing(false);
  }, []);

  const showSkeleton = isInitializing || (userId !== null && isLoading);

  return (
    <div
      className="user flex items-center gap-[9px] cursor-pointer"
      onClick={() => redirect("/settings")}
    >
      <div
        className={`w-[38px] h-[38px] rounded-full ${
          showSkeleton ? "animate-pulse bg-gray-200" : "bg-grey"
        }`}
      />

      <div className="min-w-[120px]">
        {showSkeleton ? (
          <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4" />
        ) : userId !== null ? (
          `${data?.name} ${data?.surname} ${data?.middleName}`
        ) : (
          <Link
            href="/signin"
            className="text-blue-500 hover:underline transition-colors"
          >
            Войти в систему
          </Link>
        )}
      </div>
    </div>
  );
};

export default UserAvatar;
