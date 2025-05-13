import Title from "@/components/widgets/main/Title";
import TeachersSearch from "@/components/widgets/teachers/TeachersSearch";

export default function TeachersPage() {
  return (
    <main className="flex flex-col w-full gap-[15px] overflow-hidden px-[5px] fade-in ">
      <Title page="Преподаватели" />
      <TeachersSearch />
    </main>
  );
}
