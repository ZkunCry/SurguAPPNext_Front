import Title from "@/components/widgets/main/Title";
import axiosInstance from "@/utils/axiosInstance";
import Link from "next/link";
type EducationData = {
  year: number[];
  course: number[];
  code: string[];
  specialityName: string[];
  alumniName: string[];
};

type SpecialityPair = {
  code: string;
  specialityName: string;
};

function transform(data: EducationData): SpecialityPair[] {
  // Проверка совпадения длин массивов (опционально)
  if (data.code.length !== data.specialityName.length) {
    throw new Error("Количество кодов и названий специальностей не совпадает");
  }

  // Создаем массив пар code-specialityName
  return data.code.map((code, index) => ({
    code,
    specialityName: data.specialityName[index],
  }));
}
export default async function SyllabusPage() {
  const { data: directions } = await axiosInstance.get<EducationData>(
    "/schedule/plan/list"
  );
  const specialityPairs = transform(directions);
  console.log(specialityPairs);
  return (
    <main className="flex flex-col w-full gap-[15px] overflow-hidden px-[5px] ">
      <Title page="Учебные планы" />
      <section className="flex flex-col bg-maincolor p-[10px] rounded-[10px]">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h2 className="text-[28px] font-bold mb-[20px]">
              Политехнический институт
            </h2>
            <h3 className="text-[24px] font-bold mb-[20px]">Бакалавриат</h3>
            <div className="flex flex-wrap gap-[15px] justify-start ">
              {specialityPairs.map((pair) => (
                <div
                  key={pair.code}
                  className="hover:-translate-y-[10px] transition-transform ease-in-out duration-200 relative max-w-[460px] w-full flex flex-col justify-start p-[15px] border 
                      border-[#292A2D] rounded-[20px] gap-[15px] "
                >
                  <div className="flex justify-between items-center pb-[15px] border-b border-[#ACA5A5]">
                    <h3 className="font-bold">{pair.code}</h3>
                    <div className="text-center py-[5px] px-[15px] border rounded-[20px] border-[#292A2D]">
                      <span className="italic">4 года</span>
                    </div>
                  </div>
                  <h3 className="font-semibold">{pair.specialityName}</h3>
                  <button className="self-start z-20">Подробнее</button>
                  <Link
                    className="absolute inset-0 z-10"
                    href={`/syllabus/${pair.code}/${encodeURIComponent(
                      pair.specialityName
                    )}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
