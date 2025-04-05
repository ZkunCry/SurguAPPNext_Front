import Title from "@/components/widgets/main/Title";
import Search from "../../../assets/search.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Plus from "../../../assets/plus.svg";
import Template from "../../../assets/template.png";
import Badge from "@/components/ui/badge";
import Heart from "../../../assets/heart.svg";
import Repost from "../../../assets/repost.svg";
import Filter from "@/components/widgets/filter/Filter";
import SidebarMenu from "@/components/widgets/main/SidebarMenu";
import { publicLinks } from "@/app/constants/sidebar/links";
export default function NewsPage() {
  return (
    <main className="flex flex-col w-full gap-[10px] mt-[20px] ">
      <Title
        className="md:bg-maincolor transition-all duration-200 rounded-[10px]"
        page="Новости"
      >
        <Image src={Search} alt="search" />
      </Title>
      <div className="flex justify-between ">
        <Button
          className="flex w-full max-w-[215px] justify-between py-[8px] pr-[5px] pl-[15px] border-primary"
          variant={"outline"}
        >
          <span className="text-sm text-primary">Предложить новость</span>
          <Image src={Plus} alt="plus" />
        </Button>
        <Button className="text-primary" variant={"transparent"}>
          Фильтры
        </Button>
      </div>
      <div className="flex flex-col bg-maincolor w-full p-[10px] rounded-t-[10px] gap-[15px]">
        <div className="flex flex-col bg-accent rounded-lg  items-start card min-h-[228px] w-full sm:max-w-full gap-y-[20px]">
          <div className="img lg:h-[460px] h-[270px] w-full overflow-hidden">
            <Image
              className="w-full h-full object-cover rounded-t-lg"
              src={Template}
              alt="template"
            />
          </div>
          <div className="flex flex-col px-[10px] gap-[10px] h-full">
            <div className="inline-flex gap-[5px]">
              <Badge>Тест</Badge>
              <Badge>Тест</Badge>
            </div>
            <p className="text-main-text dark:text-white flex-1">
              <span className="block">Закончился национальных культур!</span>
              <br />
              <span>
                Предлагаем тебе посмотреть репортаж, который сняли наши стажеры.
                Закончился национальных культур! Предлагаем тебе посмотреть
                репортаж, который сняли наши стажеры.
              </span>
            </p>

            <div className="flex  items-center justify-between">
              <span className="text-[#8B8787]">10 ноя в 21:00</span>
              <div className="inline-flex gap-[5px] ">
                <button className="p-[15px]">
                  <Image className="w-full" src={Heart} alt="Like" />
                </button>
                <button className="p-[15px]">
                  <Image className="w-full" src={Repost} alt="Repost" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
