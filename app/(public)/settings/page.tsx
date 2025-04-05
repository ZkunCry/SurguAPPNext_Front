import Title from "@/components/widgets/main/Title";
import Earth from "../../../assets/earth.svg";
import Pass from "../../../assets/pass.svg";
import Moon from "../../../assets/moon.svg";
import Arrow from "../../../assets/arrowsettings.svg";
import Image from "next/image";
import CustomToggle from "@/components/widgets/mode/CustomToggle";

import SettingsInfo from "@/components/widgets/settings/SettingsInfo";
export default function SettingsPage() {
  return (
    <main className=" flex flex-col w-full gap-[15px] overflow-hidden ">
      <Title className="bg-maincolor rounded-[10px]" page="Настройки" />
      <div className="min-h-[637px] flex flex-col items-center  p-[10px] bg-maincolor">
        <SettingsInfo />
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
  );
}
