import { typePair } from "@/utils/schedule";
import SelectMenu from "../select/Select";
import { useFilter } from "@/store/useFilter";
import { useShallow } from "zustand/shallow";
const FilterSelect = () => {
  const { setFilter, pair } = useFilter(
    useShallow((state) => ({
      setFilter: state.setFilter,
      pair: state.filters.pair,
    }))
  );
  const handleSelect = (value: string) => setFilter("pair", value);

  console.log(pair);
  return (
    <SelectMenu
      value={pair || ""}
      placeholder="Выберите тип пары"
      options={typePair}
      onChange={handleSelect}
    />
  );
};

export default FilterSelect;
