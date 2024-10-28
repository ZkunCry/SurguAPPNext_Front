import React, { type HTMLAttributes } from "react";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string; // Дополнительные классы для стилизации
}

const Header: React.FC<HeaderProps> = ({ className, children }) => {
  return <aside className={className}>{children}</aside>;
};

export default Header;
