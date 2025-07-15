import "../styles/search.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Search = () => {
  const { searchQuery, setSearchQuery } = useContext(DataContext);

  return (
    <div className="search">
      <form className="search-form">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search transaction here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default Search;
