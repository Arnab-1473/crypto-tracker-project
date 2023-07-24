import React, { useState } from "react";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function SearchBar({ search, onSearchChange}) {
//   const [search, setSearch] = useState("");
  return (
    <div className="search-flex">
      <SearchRoundedIcon />
      <input
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e)}
      />
    </div>
  );
}

export default SearchBar;
