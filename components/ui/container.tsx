import React from "react";
import { cn } from "@/utils/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = React.forwardRef<
  HTMLDivElement | HTMLElement,
  ContainerProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn("container", className)} // Добавляем класс 'container' и пользовательские классы
      ref={ref}
      {...props}
    >
      {children} {/* Отображаем содержимое контейнера */}
    </div>
  );
});

Container.displayName = "Container";

export default Container;
