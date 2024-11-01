"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Moon from "../../../assets/moon.svg";
import Sun from "../../../assets/sun.svg";
import Image from "next/image";

export default function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <div>Loading...</div>;
  }
  if (resolvedTheme === "dark")
    return (
      <Image
        color="red"
        alt="sun"
        src={Sun}
        onClick={() => setTheme("light")}
      />
    );
  if (resolvedTheme === "light")
    return (
      <Image
        color="red"
        src={Moon}
        alt="moon"
        onClick={() => setTheme("dark")}
      />
    );
}
