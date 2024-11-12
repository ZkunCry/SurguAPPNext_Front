import Sidebar from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import Logout from "../../../assets/logout.svg";
import { HTMLAttributes } from "react";
import { cn } from "@/utils/utils";
import type { LinkSidebar } from "@/types/link";
import { publicLinks } from "@/app/constants/sidebar/links";

interface SidebarMenuProps extends HTMLAttributes<HTMLElement> {
  className?: string; // Дополнительные классы для стилизации
  links: LinkSidebar[];
}
const SidebarMenu: React.FC<SidebarMenuProps> = ({
  className,
  links = publicLinks,
  ...props
}) => {
  return (
    <Sidebar
      className={cn(
        "hidden lg:block min-w-[200px] max-w-[200px]  p-[10px] bg-maincolor rounded-lg sticky top-[101px] ",
        className
      )}
      {...props}
    >
      <ul className="flex flex-col gap-[5px] *:border-b *:border-border *:py-[10px] *:gap-[10px] text-main-text">
        {links.map((item, index) => {
          return (
            <Link key={index} href={item.href} className="inline-flex">
              <Image src={item.image} alt={item.name} />
              <span>{item.name}</span>
            </Link>
          );
        })}

        <Link href={"/logout"} className="inline-flex border-none">
          <Image src={Logout} alt="Выйти" />
          <span> Выйти</span>
        </Link>
      </ul>
    </Sidebar>
  );
};

export default SidebarMenu;
