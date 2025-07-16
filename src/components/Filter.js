import { useContext } from "react";
import DataContext from "../context/DataContext";
import "../styles/filter.css";

const Filter = () => {
  const { setFilters } = useContext(DataContext);

  return (
    <form className="filter-form">
      <label htmlFor="filter">Filter: </label>
      <select
        name="filter"
        id="filter"
        onChange={(e) => setFilters(e.target.value)}
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </form>
  );
};

export default Filter;
