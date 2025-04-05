"use client";
import Container from "@/components/ui/container";
import React from "react";
import Arrow from "../../../assets/arrow.svg";
import Image from "next/image";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface TitleProps extends React.HTMLProps<HTMLDivElement> {
  className?: string; // Дополнительные классы для стилизации
  page?: string; // Строка для названия страницы
  children?: React.ReactNode; // Дочерние элементы
  hasBack?: boolean;
}

const Title: React.FC<TitleProps> = ({
  page,
  className,
  hasBack = false,
  children,
  ...props
}) => {
  const router = useRouter();
  return (
    <div
      className={cn("w-full bg-maincolor rounded-[10px]", className)}
      {...props}
    >
      <Container>
        <div className="flex justify-between items-center py-[12.5px] gap-[15px]">
          <div className="flex w-full  items-center gap-[15px]">
            {hasBack ? (
              <button
                onClick={() => router.back()}
                className="relative w-[40px] h-[40px]"
              >
                <Image
                  className="border border-primary rounded-[50px] p-[10px]"
                  src={Arrow}
                  fill
                  alt="arrowback"
                />
              </button>
            ) : (
              ""
            )}
            {page ? (
              <h1 className="uppercase text-[22px] dark:text-white ">{page}</h1>
            ) : (
              ""
            )}
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Title;
