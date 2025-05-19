import React from "react";
import useModal from "@/store/useModal";
import Sidebar from "@/components/ui/sidebar";
const SidebarCalendar = () => {
  const { isOpen, openModal } = useModal();
  return (
    <>
      <Sidebar className="hidden md:block w-64 border-r border-gray-200 p-4">
        <div className="text-xl text-center font-medium mb-4">Календарь</div>
        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-full mb-6 hover:bg-blue-700"
          onClick={() => openModal("CREATE_NOTE")}
        >
          Создать заметку
        </button>

        <ul className="space-y-2">
          <li className="flex items-center p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-blue-600 mr-3"></div>
            <span>Личный</span>
          </li>
          <li className="flex items-center p-2 rounded-sm hover:bg-gray-100 cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-green-600 mr-3"></div>
            <span>Работа</span>
          </li>
        </ul>
      </Sidebar>
    </>
  );
};

export default SidebarCalendar;
