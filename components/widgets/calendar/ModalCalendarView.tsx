import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Label from "@/components/ui/label";
import Input from "@/components/ui/input";
const ModalCalendarView = (props = {}) => {
  return (
    <>
      <Dialog.Title className="DialogTitle mb-1.5">Заметка</Dialog.Title>
      <div className="flex flex-col gap-3 ">
        <Label className="text-text text-sm" htmlFor="email">
          Текст
        </Label>
        <Input
          className="py-[7px] px-[10px]"
          id="email"
          placeholder="Изучить как работает компонент"
        />
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 25,
          justifyContent: "flex-end",
        }}
      >
        <Button className="text-white" variant={"default"} size={"lg"}>
          Создать
        </Button>
      </div>
    </>
  );
};

export default ModalCalendarView;
