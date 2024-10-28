import HeaderMain from "@/components/widgets/main/HeaderMain";
import Title from "@/components/widgets/main/Title";
// import SidebarMenu from "@/components/widgets/main/SidebarMenu";
import Search from "../../assets/search.svg";
import Image from "next/image";
export default function NewsPage() {
  return (
    <div className="flex w-full h-full flex-col items-start ">
      <HeaderMain />
      <main className="flex flex-col w-full mt-[20px]">
        <Title page="Новости">
          <Image src={Search} alt="search" />
        </Title>
      </main>
    </div>
  );
}
