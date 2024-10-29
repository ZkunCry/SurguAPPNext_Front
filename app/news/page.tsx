import HeaderMain from "@/components/widgets/main/HeaderMain";
import Title from "@/components/widgets/main/Title";
import Search from "../../assets/search.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Plus from "../../assets/plus.svg";
import Template from "../../assets/template.png";
import Badge from "@/components/ui/badge";

export default function NewsPage() {
  return (
    <div className="flex w-full h-full flex-col items-start ">
      <HeaderMain />
      <main className="flex flex-col w-full mt-[20px]">
        <Title page="Новости">
          <Image src={Search} alt="search" />
        </Title>
        <div className="flex justify-between">
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
        <div className="flex flex-col bg-maincolor max-w-[660px] p-[10px]">
          <div className="flex flex-col  items-start card min-h-[228px] w-full sm:max-w-full gap-y-[20px]">
            <div className="img h-[270px] w-full">
              <Image
                className="w-full h-full object-cover rounded-t-lg"
                src={Template}
                alt="template"
              />
            </div>
            <div className="flex flex-col px-[10px]">
              <div className="inline-flex gap-[5px]">
                <Badge>Тест</Badge>
                <Badge>Тест</Badge>
              </div>
              <p>
                <span>Закончился национальных культур!</span>
                <span>
                  Предлагаем тебе посмотреть репортаж, который сняли наши
                  стажеры. Закончился национальных культур! Предлагаем тебе
                  посмотреть репортаж, который сняли наши стажеры.
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
