"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const MenuLinks = ({ count }) => {
  const pathname = usePathname();
  const params = useSearchParams().get("course");
  return (
    <nav className="w-full py-[10px]">
      <ul className="flex flex-wrap gap-[16px]">
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <li key={index}>
              <Link
                className={` ${
                  params === `${index + 1}`
                    ? "bg-primary text-white"
                    : "bg-transparent text-black border border-primary"
                }  italic text-[18px] px-[24px] py-[9px] rounded-[10px]`}
                href={pathname + `?course=${index + 1}`}
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
