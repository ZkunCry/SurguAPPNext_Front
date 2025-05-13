"use client";
import { useUserData } from "@/hooks/useUserData";
import Link from "next/link";
import { redirect } from "next/navigation";

const UserAvatar = () => {
  const { data, showSkeleton, userId, error } = useUserData();

  return (
    <div
      className="flex items-center gap-3 cursor-pointer"
      onClick={() => redirect("/settings")}
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
          <Link href="/signin">Войти в систему</Link>
        )}
      </div>
    </div>
  );
};

export default UserAvatar;
