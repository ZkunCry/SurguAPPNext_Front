import Sidebar from "@/components/ui/sidebar";
import React from "react";
import Map from "../../../assets/map.svg";
import Image from "next/image";
import { JSDOM } from "jsdom";

const getData = async () => {
  const res = await fetch("https://www.surgu.ru/ucheba/raspisanie-zvonkov");
  const html = await res.text();
  const template = [
    "Корпусы: «А», «Г», «К», «У»",
    "Медицинский колледж",
    "Дружба",
    "Водолей",
  ];
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Извлечение данных
  const scheduleData = [];

  // Найти нужный элемент по ID
  const content = document.querySelector("#content_paragraph_56");

  if (content) {
    // Извлечение всех таблиц с расписанием
    const tables = content.querySelectorAll("table");

    tables.forEach((table, index2) => {
      const rows = table.querySelectorAll("tr");
      const times = [];
      rows.forEach((row, index) => {
        const cells = row.querySelectorAll("td");
        console.log(cells[0].textContent);
        if (cells.length > 0) {
          const timeInfo = {
            pair: cells[0].textContent.trim(),
            time: cells[1].textContent.trim(),
            break: cells[2].textContent.trim(),
          };
          times.push(timeInfo);
        }
      });
      const title = template[index2];
      scheduleData.push({ title, times });
    });
  }
  return scheduleData;
};

const ScheduleAside = async () => {
  const data = await getData();
  return (
    <Sidebar className="flex flex-col  max-w-[280px] min-w-[280px] w-full max-h-[567px] overflow-auto bg-maincolor rounded-[10px]">
      <div className="title p-[10px] border-b border-border">
        <h1 className="text-[18px]"> Расписание звонков</h1>
      </div>
      <div className="flex flex-col gap-[20px] p-[10px]">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex flex-col">
              <div className="flex gap-[10px]">
                <Image src={Map} alt="Карта" />
                <span className="text-text">{item.title} </span>
              </div>

              <ul className="flex flex-col px-[30px] text-text">
                {item.times.map((timeValue, id) => {
                  return (
                    <li
                      key={id}
                    >{`${timeValue.pair} ${timeValue.time} ${timeValue.break}`}</li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </Sidebar>
  );
};

export default ScheduleAside;
