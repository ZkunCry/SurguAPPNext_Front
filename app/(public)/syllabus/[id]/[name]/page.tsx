import Title from "@/components/widgets/main/Title";
import MenuLinks from "@/components/widgets/menuLinks/MenuLinks";
import SearchComponent from "@/components/widgets/search/SearchComponent";
import Directions from "@/components/widgets/syllabus/Directions";
import axiosInstance from "@/utils/axiosInstance";
export default async function DirectionPage({
  params,
}: {
  params: Promise<{ id: string; name: string }>;
}) {
  const result = await params;
  const { data } = await axiosInstance.get(
    `/schedule/plan/details?code=${result.id}`
  );

  return (
    <main className="flex flex-col gap-[15px]">
      <Title page={decodeURIComponent(result.name)} hasBack />
      <div className="bg-maincolor rounded-[10px] p-[10px]">
        <MenuLinks count={data.courseCount} />
      </div>

      <SearchComponent />
      <section className="flex flex-col bg-maincolor rounded-[10px] p-[10px] ">
        <Directions directions={data.classStudyPlanInfo} />
      </section>
    </main>
  );
}
