import { cn } from "@/utils/utils";
import React, { type HTMLAttributes } from "react";
interface GridProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}
const Grid: React.FC<GridProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        className,
        "relative grid  grid-cols-1 lg:grid-cols-[200px,minmax(0,1fr),280px] grid-rows-1 mt-[20px] items-start gap-[20px]"
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
