export const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
const months = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];
export type Calendar = {
  day: string;
  number: number;
  month: string;
  year: number;
  monthNumber: number;
  isCurrent: boolean;
}[];
export function fillCurrentMonth(): Calendar {
  const currentDate = new Date(); // Получаем текущую дату один раз
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Числовой формат месяца (1-12)
  const currentDay = currentDate.getDate();

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

  const calendar = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth - 1, day);
    const isCurrent =
      day === currentDay &&
      currentMonth === currentDate.getMonth() + 1 &&
      currentYear === currentDate.getFullYear();

    calendar.push({
      day: daysOfWeek[date.getDay()],
      number: day,
      month: monthName,
      year: currentYear,
      monthNumber: currentMonth, // Добавляем числовое представление месяца
      isCurrent: isCurrent, // Флаг текущего дня
    });
  }

  return calendar;
}
