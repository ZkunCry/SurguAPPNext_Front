import SelectMenu from "../select/Select";
import { pairTimesSelect } from "@/utils/schedule";
import { useFilter } from "@/store/useFilter";
import { useShallow } from "zustand/shallow";
const TimeSelect = () => {
  const { setFilter, time } = useFilter(
    useShallow((state) => ({
      setFilter: state.setFilter,
      time: state.filters.time,
    }))
  );
  const handleSelect = (value: string) => setFilter("time", value);
  return (
    <SelectMenu
      value={time}
      placeholder="Выберите время пары"
      options={pairTimesSelect}
      onChange={handleSelect}
    />
  );
};

export default TimeSelect;
