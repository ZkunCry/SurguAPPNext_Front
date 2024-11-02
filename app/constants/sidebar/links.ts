import type { LinkSidebar } from "@/types/link";
import Home from "../../../assets/home.svg";
import Schedule from "../../../assets/schedule.svg";
import Teachers from "../../../assets/teachers.svg";
import Settings from "../../../assets/settings.svg";
import Feedback from "../../../assets/feedback.svg";
import Favourites from "../../../assets/favourites.svg";
export const publicLinks: LinkSidebar[] = [
  { name: "Новости", href: "/news", image: Home },
  { name: "Расписание", href: "/schedule", image: Schedule },
  { name: "Преподаватели", href: "/teachers", image: Teachers },
  { name: "Настройки", href: "/settings", image: Settings },
];
export const protectednPublicLinks: LinkSidebar[] = [
  { name: "Новости", href: "/news", image: Home },
  { name: "Расписание", href: "/schedule", image: Schedule },
  { name: "Преподаватели", href: "/teachers", image: Teachers },
  { name: "Настройки", href: "/settings", image: Settings },
  { name: "Избранное", href: "/favourites", image: Favourites },
  { name: "Обратная связь", href: "/favourites", image: Feedback },
];
