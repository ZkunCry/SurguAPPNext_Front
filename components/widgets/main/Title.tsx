import Container from "@/components/ui/container";
import React from "react";
import Arrow from "../../../assets/arrow.svg";
import Image from "next/image";
import { cn } from "@/utils/utils";
interface TitleProps extends React.HTMLProps<HTMLDivElement> {
  className?: string; // Дополнительные классы для стилизации
  page: string; // Строка для названия страницы
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
  return (
    <div className={cn("w-full", className)} {...props}>
      <Container>
        <div className="flex justify-between items-center py-[12.5px] gap-[15px]">
          <div className="flex w-full items-center gap-[15px]">
            {hasBack ? (
              <div className="relative w-[40px] h-[40px]">
                <Image
                  className="border border-primary rounded-[50px] p-[10px]"
                  src={Arrow}
                  fill
                  alt="arrowback"
                />
              </div>
            ) : (
              ""
            )}
            <h1
              style={{
                background:
                  "radial-gradient(110.5% 150.26% at 100% -5.51%, #4562D6 0%, #031831 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
              className="uppercase text-[22px]"
            >
              {page}
            </h1>
          </div>
          {children}
        </div>
      </Container>
    </div>
  );
};

export default Title;
