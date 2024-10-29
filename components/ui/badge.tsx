import { cn } from "@/utils/utils";
import React, { type HTMLAttributes } from "react";
interface BadgeProps extends HTMLAttributes<HTMLElement> {
  className?: string; // Дополнительные классы для стилизации
}
const Badge: React.FC<BadgeProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "py-[5px] px-[15px] rounded-[35px] border border-primary text-center text-primary italic",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;
