"use client";
import { useGetUserById } from "@/query-hooks/user";
import useUserStore from "@/store/useUser";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";
import toast from "react-hot-toast";
const UserAvatar = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const { getUser, setUser } = useUserStore(
    useShallow((state) => ({
      getUser: state.getUserByStorage,
      setUser: state.setCredentials,
    }))
  );

  const { data, isLoading, error } = useGetUserById(userId, {
    enabled: !!userId,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setUser(data);
    },
  });
  useEffect(() => {
    if (error) {
      toast.error(`${error.message} | ${error.status}`);
    }
  }, [error]);
  useEffect(() => {
    if (typeof window !== undefined) {
      const id = getUser();
      setUserId(id);
      setIsInitializing(false);
      console.log(id);
    }
  }, []);

  const showSkeleton = isInitializing || (userId !== null && isLoading);

  return (
    <div className="user flex items-center gap-[9px] cursor-pointer">
      <div
        className={`w-[38px] h-[38px] rounded-full ${
          showSkeleton ? "animate-pulse bg-gray-200" : "bg-grey"
        }`}
        onClick={() => redirect("/settings")}
      />

      <div className="min-w-[120px]">
        {showSkeleton ? (
          <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4" />
        ) : userId !== null && !error ? (
          `${data?.name} ${data?.surname} ${data?.middleName}`
        ) : (
          <Link href="/signin" className=" transition-colors">
            Войти в систему
          </Link>
        )}
      </div>
    </div>
  );
};

export default UserAvatar;
