"use client";
import { useBreakpoint } from "@/hooks/useMedia";
import dynamic from "next/dynamic";
import UserAvatar from "./UserAvatar";
import { useEffect, useState } from "react";
const MobileDrawer = dynamic(
  () => import("@/components/widgets/drawer/Drawer"),
  { ssr: false }
);

export default function ResponsiveUserMenu() {
  const [mounted, setMounted] = useState(false);
  const { isLg } = useBreakpoint("lg");
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted)
    return (
      <div className="max-w-[50px] h-[40px] bg-gray-200 animate-pulse rounded-sm w-3/4" />
    );
  return <>{isLg ? <UserAvatar /> : <MobileDrawer />}</>;
}
