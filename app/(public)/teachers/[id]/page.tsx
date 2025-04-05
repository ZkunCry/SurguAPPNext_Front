import Title from "@/components/widgets/main/Title";
import { SearchService } from "@/services/search/searchService";
import Link from "next/link";
export default async function TeacherPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const teacher = await SearchService.getSearchTeacher(id);
  console.log(teacher);
  return (
    <div className="flex flex-col gap-[10px] ">
      <Title hasBack page="Преподаватель" />
      <div className="flex bg-maincolor pb-[15px] flex-col w-full gap-[10px] items-center rounded-[10px] p-[10px] ">
        <div className="w-full items-center justify-center flex flex-col  gap-[10px] border-b border-border">
          <div className="bg-[#A6A9B5] w-[100px] aspect-square rounded-full my-[30px]"></div>
          <div className="flex flex-col items-center gap-[5px]">
            <h1 className="text-lg">{teacher?.data.name}</h1>
            <Link
              href={`mailto:${teacher?.data.work_email}`}
              className="text-]16px] text-primary pb-[10px]"
            >
              {teacher?.data.work_email}
            </Link>
          </div>
        </div>
        <div className="flex flex-col  ">
          <div className="flex flex-col self-start">
            <h2 className="text-center mb-[10px]">Кафедры</h2>
            <ul className="flex flex-col gap-[15px]">
              {teacher?.data.departments.map((d) => (
                <div className="flex flex-col gap-[10px]">
                  <h2 className="text-center"> {d.institute.name}</h2>
                  <li className=" bg-accent rounded-[10px] w-full p-[15px] gap-[15px]">
                    {d.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
