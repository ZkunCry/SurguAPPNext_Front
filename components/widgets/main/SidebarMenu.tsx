import Sidebar from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Home from "../../../assets/home.svg";
import Schedule from "../../../assets/schedule.svg";
import Teachers from "../../../assets/teachers.svg";
import Settings from "../../../assets/settings.svg";
import Feedback from "../../../assets/feedback.svg";
import Logout from "../../../assets/logout.svg";
import Favouries from "../../../assets/favourites.svg";

const SidebarMenu = () => {
  return (
    <Sidebar className="min-w-[200px] p-[10px] bg-maincolor rounded-lg ">
      <ul className="flex flex-col gap-[5px] *:border-b *:border-border *:py-[10px] *:gap-[10px]">
        <li className="inline-flex">
          <Image src={Home} alt="Новости" />
          <Link href={"/news"}>Новости</Link>
        </li>
        <li className="inline-flex">
          <Image src={Schedule} alt="Расписание" />

          <Link href={"/schedule"}>Расписание</Link>
        </li>
        <li className="inline-flex">
          <Image src={Teachers} alt="Преподаватели" />

          <Link href={"/teachers"}>Преподаватели</Link>
        </li>
        <li className="inline-flex ">
          <Image src={Favouries} alt="Избранное" />

          <Link href={"/favourites"}>Избранное</Link>
        </li>
        <li className="inline-flex">
          <Image src={Settings} alt="Настройки" />

          <Link href={"/settings"}>Настройки</Link>
        </li>
        <li className="inline-flex">
          <Image src={Feedback} alt="Обратная связь" />
          <Link href={"/feedback"}>Обратная связь</Link>
        </li>
        <li className="inline-flex border-none">
          <Image src={Logout} alt="Выйти" />
          <Link href={"/logout"}>Выйти</Link>
        </li>
      </ul>
    </Sidebar>
  );
};

export default SidebarMenu;
