"use client";
import React from "react";
import SearchComponent from "../search/SearchComponent";
import useSearch from "@/store/useSearch";
import Teachers from "./Teachers";

const TeachersSearch = () => {
  return (
    <div className="search flex flex-col gap-[15px]">
      <SearchComponent />
      <div className="flex flex-col gap-[10px] bg-maincolor rounded-[10px] py-[10px]">
        <div className="title p-[10px]">
          <h1>Преподаватели СурГУ</h1>
        </div>
        <Teachers />
      </div>
    </div>
  );
};

export default TeachersSearch;
