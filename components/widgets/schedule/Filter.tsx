import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Label from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import FilterSelect from "./PairSelectc";
import TimeSelect from "./TimeSelect";
import { useFilter } from "@/store/useFilter";
import useModal from "@/store/useModal";
import { useShallow } from "zustand/shallow";
const Filter = () => {
  const [resetFilteres, applyFilters] = useFilter(
    useShallow((state) => [state.resetFilters, state.applyFilters])
  );
  const close = useModal((state) => state.closeModal);

  return (
    <>
      <Dialog.Title className="DialogTitle mb-3">Фильтры</Dialog.Title>
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-6 group">
          <div className="flex flex-col gap-3">
            <Label className="text-text text-sm" htmlFor="email">
              Тип пары
            </Label>
            <FilterSelect />
          </div>
          <div className="flex flex-col gap-3">
            <Label className="text-text text-sm" htmlFor="email">
              Время пары
            </Label>
            <TimeSelect />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button
            className="text-white cursor-pointer"
            variant={"default"}
            size={"lg"}
            onClick={() => {
              applyFilters();
              close();
            }}
          >
            Применить
          </Button>
          <Button
            className="text-white cursor-pointer"
            variant={"default"}
            size={"lg"}
            onClick={() => resetFilteres()}
          >
            Сбросить
          </Button>
        </div>
      </div>
    </>
  );
};

export default Filter;
