"use client";
import { TitleProps } from "./Title";
import Title from "./Title";
import React, { useState } from "react";
import Search from "../../../assets/search.svg";
import Input from "@/components/ui/input";
import Image from "next/image";
import ArrowBack from "../../../assets/arrow.svg";

const TitleWithSearch: React.FC<TitleProps> = ({
  onChange,
  placeholder,
  page,
  ...props
}) => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive((prev) => !prev);
  };

  return (
    <Title page={ page} {...props}>
    
    </Title>
  );
};

export default TitleWithSearch;
