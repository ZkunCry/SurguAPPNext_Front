import HeaderMain from "@/components/widgets/main/HeaderMain";
import Title from "@/components/widgets/main/Title";
import Search from "../../assets/search.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Plus from "../../assets/plus.svg";
import Template from "../../assets/template.png";
import Badge from "@/components/ui/badge";
import Heart from "../../assets/heart.svg";
import Repost from "../../assets/repost.svg";
import Container from "@/components/ui/container";
import SidebarMenu from "@/components/widgets/main/SidebarMenu";
import Filter from "@/components/widgets/filter/Filter";

export default function NewsPage() {
  return (
    <div className="flex w-full h-full flex-col items-start ">
      <HeaderMain />
      <Container>
        <div className="relative grid grid-cols-[1fr,minmax(0,660px),1fr] grid-rows-1 mt-[20px] items-start gap-[10px]">
          <SidebarMenu className="sticky top-[20px]" />
          <main className="flex flex-col w-full   gap-[10px] ">
            <Title className="md:bg-maincolor rounded-[10px]" page="Новости">
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
            <div className="flex flex-col bg-maincolor max-w-[660px] p-[10px] rounded-t-[10px] gap-[15px]">
              <div className="flex flex-col bg-accent rounded-t-lg  items-start card min-h-[228px] w-full sm:max-w-full gap-y-[20px]">
                <div className="img h-[270px] w-full">
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
                  <p className="text-[#3C3D41] dark:text-white flex-1">
                    <span className="block">
                      Закончился национальных культур!
                    </span>
                    <br />
                    <span>
                      Предлагаем тебе посмотреть репортаж, который сняли наши
                      стажеры. Закончился национальных культур! Предлагаем тебе
                      посмотреть репортаж, который сняли наши стажеры.
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
          <Filter className="sticky top-[20px]" />
        </div>
      </Container>
    </div>
  );
}
