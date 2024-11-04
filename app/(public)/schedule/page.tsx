import Title from "@/components/widgets/main/Title";
import Search from "../../../assets/search.svg";
import Image from "next/image";
import ScheduleAside from "@/components/widgets/main/ScheduleAside";
import Link from "next/link";
import ScheduleSlider from "@/components/widgets/scheduleSlider/ScheduleSlider";
import Teach from "../../../assets/teach.svg";
import Map from "../../../assets/map.svg";
import Zametka from "../../../assets/zametka.svg";

export default function SchedulePage() {
  return (
    <>
      <main className="flex flex-col w-full gap-[10px] overflow-hidden">
        <Title
          className="md:bg-maincolor transition-all duration-200 rounded-[10px]"
          page="Расписание"
        >
          <Image src={Search} alt="search" />
        </Title>
        <div className="flex flex-col bg-maincolor mt-[5px]  rounded-[10px] px-[10px] pt-[20px] pb-[30px] gap-[30px]">
          <div className="flex flex-1 justify-between items-center text-[18px]">
            <div className="inline-flex items-center gap-[10px] text-text">
              <h1>Моя группа</h1> <span className="text-[16px]">609-21</span>
            </div>

            <Link className="text-primary text-sm" href={"/"}>
              Расписание сессии
            </Link>
          </div>
          <div className="inline-flex">Неделя 1 | числитель</div>
          <ScheduleSlider />
        </div>
        <div className="cards flex flex-col gap-[10px]">
          <div className="flex  flex-col card  p-[10px] bg-maincolor rounded-[10px] gap-[10px]">
            <div className="flex  justify-between">
              <h1>1 пара</h1>
              <h1>8:30 - 9:50</h1>
            </div>
            <div className="py-[15px] px-[10px] bg-background rounded-[10px]">
              <div className="flex justify-between items-center pb-[15px] border-b border-border">
                <span className="flex-1">
                  Объектно ориентированное программирование
                </span>
                <div className="flex items-center gap-[10px]">
                  <span className="p-[5px] bg-primary text-white rounded-[3px] text-sm">
                    Практика
                  </span>
                  <span className="p-[5px] rounded-[3px] text-white bg-group text-sm">
                    п/г 1
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-[7px] py-[15px] border-b border-border">
                <div className="inline-flex items-center gap-[10px]">
                  <Image src={Map} alt="map" />
                  <span>У903</span>
                </div>
                <div className="inline-flex items-center gap-[10px]">
                  <Image src={Teach} alt="map" />
                  <span>Гришмановский Павел Валерьевич</span>
                </div>
              </div>
              <div className="flex items-center gap-[10px] text-ellipsis overflow-hidden pt-[15px] ">
                <Image src={Zametka} alt="zametka" />
                <span className="text-ellipsis overflow-hidden text-nowrap">
                  Заметка (например, возможность указать, что в этот день будет
                  контрольная или диагностический тест
                </span>
              </div>
            </div>
            <div className="py-[15px] px-[10px] bg-background rounded-[10px]">
              <div className="flex justify-between items-center pb-[15px] border-b border-border">
                <span className="flex-1">
                  Объектно ориентированное программирование
                </span>
                <div className="flex items-center gap-[10px]">
                  <span className="p-[5px] bg-primary text-white rounded-[3px] text-sm">
                    Практика
                  </span>
                  <span className="p-[5px] rounded-[3px] text-white bg-group text-sm">
                    п/г 1
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-[7px] py-[15px] border-b border-border">
                <div className="inline-flex items-center gap-[10px]">
                  <Image src={Map} alt="map" />
                  <span>У903</span>
                </div>
                <div className="inline-flex items-center gap-[10px]">
                  <Image src={Teach} alt="map" />
                  <span>Гришмановский Павел Валерьевич</span>
                </div>
              </div>
              <div className="flex items-center gap-[10px] text-ellipsis overflow-hidden pt-[15px] ">
                <Image src={Zametka} alt="zametka" />
                <span className="text-ellipsis overflow-hidden text-nowrap">
                  Заметка (например, возможность указать, что в этот день будет
                  контрольная или диагностический тест
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ScheduleAside />
    </>
  );
}
