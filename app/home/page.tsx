import Card from "@/components/widgets/home/Card";
import "./style.css";
import Header from "@/components/ui/header";
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center container animate-fadeInUp min-h-dvh">
      <Header className="text-center mb-[40px]">
        <h1 className="title">Добро пожаловать в АССИСТЕНТ</h1>
        <p className="delay-200 animate-fadeInUp">Выберите нужный раздел</p>
      </Header>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-6">
        <Card
          icon="📅"
          title="Расписание"
          description="Просмотр учебного расписания"
          href={"/schedule"}
          delay
        />
        <Card
          icon="📅"
          title="Календарь занятий"
          description="Просмотр учебного расписания в привычном формате"
          href={"/calendar"}
          delay
        />
        <Card
          icon="📚"
          title="Учебные планы"
          description="Программы обучения и специальности"
          href="/syllabus"
          delay
        />
        <Card
          icon="⚙️"
          title="Настройки"
          description="Персонализация вашего профиля"
          href="/settings"
          delay
        />
      </div>
    </div>
  );
}
