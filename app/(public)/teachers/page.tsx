import { publicLinks } from "@/app/constants/sidebar/links";
import Grid from "@/components/widgets/main/Grid";
import SidebarMenu from "@/components/widgets/main/SidebarMenu";
import TitleWithSearch from "@/components/widgets/main/TitleWithSearch";
import User from "@/components/widgets/teachers/User";

export default function TeachersPage() {
  return (
    <Grid>
      <SidebarMenu  />
      <main className="flex flex-col w-full gap-[15px] overflow-hidden ">
        <TitleWithSearch
          page="Преподаватели"
          placeholder="Поиск преподавателя"
        />
        <div className="flex flex-col gap-[10px] bg-maincolor rounded-[10px] py-[10px]">
          <div className="title p-[10px]">
            <h1>Мои преподаватели</h1>
          </div>
          <User
            className="cursor-pointer"
            name="Назаров Евгений Владимирович"
            department="Кафедра автомтики и компьютерных систем"
          />
        </div>
      </main>
    </Grid>
  );
}
