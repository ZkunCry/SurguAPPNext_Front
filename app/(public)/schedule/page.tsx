import Title from "@/components/widgets/main/Title";
import Search from "../../../assets/search.svg";
import Image from "next/image";
import ScheduleAside from "@/components/widgets/main/ScheduleAside";
export default function SchedulePage() {
  return (
    <>
      <main className="flex flex-col w-full">
        <Title
          className="md:bg-maincolor transition-all duration-200 rounded-[10px]"
          page="Расписание"
        >
          <Image src={Search} alt="search" />
        </Title>
      </main>
      <ScheduleAside />
    </>
  );
}
