import { Pair, GroupedPairs } from "@/types/schedule";
export function groupByName(data: Pair[]): GroupedPairs {
  const resultArr: GroupedPairs = [];
  data.forEach((item) => {
    const dayIndex = parseInt(item.name) - 1;
    if (!resultArr[dayIndex]) resultArr[dayIndex] = [];
    resultArr[dayIndex].push(item);
  });

  return resultArr;
}
