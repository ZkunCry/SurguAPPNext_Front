import React from "react";
import useSearch from "@/store/useSearch";
import { useSearchQuery } from "@/query-hooks/search";
import User from "./User";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";
const Teachers = () => {
  const searchString = useSearch((state) => state.searchString);
  const { data, isFetching } = useSearchQuery(searchString, {
    enabled: searchString !== null && searchString.trim().length > 0,
  });

  return (
    <div className="flex flex-col px-[10px]">
      {isFetching ? (
        <h1 className="self-center">
          <LoaderCircle size={50} className="animate-spin" />
        </h1>
      ) : (
        data?.data.map((item) => (
          <Link href={`/teachers/${item.id}`} key={item.id}>
            <User name={item.name} />
          </Link>
        ))
      )}
      {data?.data?.length === 0 && (
        <h1 className="self-center">Ничего не найдено</h1>
      )}
      {data === undefined && <h1 className="self-center">Пока тут пусто :(</h1>}
    </div>
  );
};

export default Teachers;
