import Title from "@/components/widgets/main/Title";
import Earth from "../../../assets/earth.svg";
import Pass from "../../../assets/pass.svg";
import Moon from "../../../assets/moon.svg";
import Arrow from "../../../assets/arrowsettings.svg";

import Image from "next/image";
import CustomToggle from "@/components/widgets/mode/CustomToggle";

export default function SettingsPage() {
  return (
    <>
      <main className=" flex flex-col w-full gap-[15px] overflow-hidden ">
        <Title className="bg-maincolor rounded-[10px]" page="Настройки" />
        <div className="min-h-[637px] flex flex-col items-center  p-[10px] bg-maincolor">
          <div className="flex flex-col w-full items-center ">
            <div className="bg-[#A6A9B5] w-[100px] aspect-square rounded-full my-[30px]"></div>
            <div className="w-full items-center flex flex-col border-b border-border gap-[10px]">
              <h1 className="text-lg">Цимбалистова Анастасия Евгеньевна</h1>
              <h1 className="text-]16px] text-primary pb-[10px]">
                tsimbalistova_ae@edu.surgu.ru
              </h1>
            </div>
          </div>
          <div className="w-full flex flex-col mt-[55px] gap-[10px]">
            <div className="flex bg-accent rounded-[10px] w-full p-[15px] gap-[15px]">
              <Image src={Earth} alt="earth" />
              <h1 className="flex-1">Язык</h1>
              <span className="text-primary">Русский</span>
            </div>
            <div className="flex bg-accent rounded-[10px] w-full p-[15px] gap-[15px]">
              <Image src={Moon} alt="moon" />
              <h1 className="flex-1">Темная тема</h1>
              <CustomToggle />
            </div>
            <div className="flex bg-accent rounded-[10px] w-full p-[15px] gap-[15px]">
              <Image src={Pass} alt="pass" />
              <h1 className="flex-1">Изменить пароль</h1>
              <Image src={Arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
