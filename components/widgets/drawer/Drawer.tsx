"use client";
import Link from "next/link";

import { useUserData } from "@/hooks/useUserData";
import { LogOut, Menu } from "lucide-react";
import { Drawer } from "vaul";
import { publicLinks } from "@/app/constants/sidebar/links";
import Image from "next/image";

export default function MobileDrawer() {
  const { data, showSkeleton, userId, error } = useUserData();

  return (
    <Drawer.Root>
      <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center gap-2 rounded-full px-4">
        <Menu />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed z-10 inset-0 bg-black/40" />
        <Drawer.Title />
        <Drawer.Content className=" flex z-20 flex-col gap-6  mt-24 h-fit fixed bottom-0 left-0 right-0 bg-maincolor p-8 rounded-t-[10px]">
          <div>
            <div className="mx-auto w-12 h-1.5 rounded-full bg-gray-300 mb-8" />

            <div className="flex justify-between items-center gap-3">
              <div className="flex gap-3">
                <div
                  className={`w-[45px] h-[45px] rounded-full ${
                    showSkeleton ? "animate-pulse bg-gray-200" : "bg-grey"
                  }`}
                />
                <div className="flex items-center gap-5 text-center">
                  {showSkeleton ? (
                    <div className="h-4 bg-gray-200 animate-pulse rounded-sm w-32 mx-auto" />
                  ) : userId && !error ? (
                    <Link className="text-lg" href={"/settings"}>
                      {data?.name} {data?.surname} {data?.middleName}
                    </Link>
                  ) : (
                    <Link href="/signin">Войти в систему</Link>
                  )}
                </div>
              </div>
              {data ? (
                <Link href={"/api/logout"}>
                  {" "}
                  <LogOut className="justify-end" />
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
          <ul className="flex flex-col gap-2">
            {publicLinks.map((item, index) => {
              return (
                <Link
                  className="w-full hover:bg-accent px-2 py-4 rounded-lg transition-colors duration-200"
                  key={index}
                  href={item.href}
                >
                  <div className="flex items-center gap-3 text-[16px]">
                    <Image
                      width={30}
                      height={30}
                      src={item.image}
                      alt="image"
                    />
                    <span>{item.name} </span>
                  </div>
                </Link>
              );
            })}
          </ul>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
