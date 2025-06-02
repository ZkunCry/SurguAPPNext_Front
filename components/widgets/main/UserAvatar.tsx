"use client";
import { useUserData } from "@/hooks/useUserData";
import Link from "next/link";
import { redirect } from "next/navigation";

const UserAvatar = () => {
  const { data, showSkeleton, userId, error } = useUserData();
  console.log(!userId && error);
  return (
    <Link
      className="flex items-center gap-3 cursor-pointer z-[2] relative"
      href={userId && !error ? "/settings" : "/signin"}
    >
      <div
        className={`w-[38px] h-[38px] rounded-full ${
          showSkeleton ? "animate-pulse bg-gray-200" : "bg-grey"
        }`}
      />

      <div className="min-w-[120px]">
        {showSkeleton ? (
          <div className="h-4 bg-gray-200 animate-pulse rounded-sm w-3/4" />
        ) : userId && !error ? (
          `${data?.name} ${data?.surname} ${data?.middleName}`
        ) : (
          <span>Войти в систему</span>
        )}
      </div>
    </Link>
  );
};

export default UserAvatar;
