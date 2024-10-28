import React, { type HTMLAttributes } from "react";

interface SidebarProps extends HTMLAttributes<HTMLElement> {
  className?: string; // Дополнительные классы для стилизации
}

const Sidebar: React.FC<SidebarProps> = ({ className, children }) => {
  return <aside className={className}>{children}</aside>;
};

export default Sidebar;
