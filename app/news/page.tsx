import HeaderMain from "@/components/widgets/main/HeaderMain";
import SidebarMenu from "@/components/widgets/main/SidebarMenu";

export default function NewsPage() {
  return (
    <div className="flex w-full h-full flex-col items-start ">
      <HeaderMain />
      <SidebarMenu />
    </div>
  );
}
