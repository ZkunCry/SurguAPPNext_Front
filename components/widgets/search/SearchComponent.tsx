"use client";
import useSearch from "@/store/useSearch";
import React, { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import Input from "@/components/ui/input";
import { useShallow } from "zustand/shallow";
const SearchComponent = ({ cb }) => {
  const [searchStr, setSearchStr] = useState("");
  const { setSearchString, searchString } = useSearch(
    useShallow((state) => ({
      setSearchString: state.setSearchString,
      searchString: state.searchString,
    }))
  );
  const debouncedValue = useDebounce(searchStr, 1000);
  useEffect(() => {
    setSearchString(debouncedValue);
    // cb(debouncedValue);
  }, [debouncedValue]);
  console.log(searchString);
  return (
    <Input
      className="bg-maincolor border-none focus-visible:outline! focus-visible:outline-primary!"
      placeholder="Поиск"
      onChange={(e) => setSearchStr(e.target.value)}
    />
  );
};

export default SearchComponent;
