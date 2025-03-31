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
  console.log("test");
  return (
    <Title page={!isSearchActive && page} {...props}>
      {isSearchActive && (
        <div className="flex w-full ">
          <button onClick={handleSearchClick} className=" aspect-square">
            <Image
              className="w-full aspect-square border border-primary rounded-[50px] p-[10px]"
              src={ArrowBack}
              alt="arrowback"
            />
          </button>
          <Input
            className="border-none focus:outline-none"
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      )}
      {!isSearchActive && (
        <button onClick={handleSearchClick}>
          <Image src={Search} alt="search" />
        </button>
      )}
    </Title>
  );
};

export default TitleWithSearch;
