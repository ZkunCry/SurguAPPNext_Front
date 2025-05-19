"use client";
import { useGetUserMe } from "@/query-hooks/user";
import useUserStore from "@/store/useUser";
import { useShallow } from "zustand/shallow";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useUserData = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  const { getUser, setUser } = useUserStore(
    useShallow((state) => ({
      getUser: state.getUserByStorage,
      setUser: state.setCredentials,
    }))
  );

  const userQuery = useGetUserMe({
    enabled: !!userId,
    refetchOnWindowFocus: false,
    onError: (error) => {
      toast.error(`${error.message} | ${error.status}`);
    },
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserId(getUser());
      setIsInitializing(false);
    }
  }, []);
  useEffect(() => {
    if (userQuery.data) {
      setUser(userQuery.data);
    }
  }, [userQuery.data]);
  return {
    ...userQuery,
    showSkeleton: isInitializing || (userId !== null && userQuery.isLoading),
    userId,
  };
};
