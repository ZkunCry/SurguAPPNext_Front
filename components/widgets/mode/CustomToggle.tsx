"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
const CustomToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const onToggleMode = () =>
    resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");
  useEffect(() => {
    setMounted(true);
  }, []);
  return !mounted ? (
    <span>Loading...</span>
  ) : (
    <Toggle
      checked={resolvedTheme === "dark"}
      icons={false}
      className={"custom-toggle"}
      onChange={onToggleMode}
    />
  );
};

export default CustomToggle;
