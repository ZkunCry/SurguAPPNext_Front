import Title from "@/components/widgets/main/Title";
import MenuLinks from "@/components/widgets/menuLinks/MenuLinks";
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
  console.log(data);
  return (
    <main className="flex flex-col gap-[15px]">
      <Title page={decodeURIComponent(result.name)} hasBack />
      <section className="flex flex-col bg-maincolor rounded-[10px] p-[10px] ">
        <div className="flex flex-col">
          <MenuLinks count={data.courseCount} />
        </div>
      </section>
    </main>
  );
}
