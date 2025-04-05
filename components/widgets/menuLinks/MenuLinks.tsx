"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuLinks = ({ count }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="w-full">
      <ul className="flex flex-wrap gap-[16px]">
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <li key={index}>
              <Link
                className={` ${
                  pathname.includes(`/${index + 1}`)
                    ? "bg-[#292A2D] text-white"
                    : "bg-transparent text-black border border-[#292A2D]"
                }  italic text-[18px] px-[24px] py-[9px] rounded-[10px]`}
                href={pathname + `/${index + 1}`}
              >
                {index + 1} курс
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default MenuLinks;
