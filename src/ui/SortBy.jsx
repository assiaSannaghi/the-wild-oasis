import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParamas, setSearchParams] = useSearchParams();
  const sortBy = searchParamas.get("sortBy") || "";

  function handleChange(e) {
    searchParamas.set("sortBy", e.target.value);
    setSearchParams(searchParamas);
  }

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={sortBy}
    />
  );
}

export default SortBy;
