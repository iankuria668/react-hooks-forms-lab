import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  const [filterItem, setFilterItem] = useState("All");
  const [searchText, setSearchText] = useState("");
  
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setFilterItem(category);
    onCategoryChange(category);
  };
    
  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
    onSearchChange(searchText);
  };

  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        placeholder="Search..." 
        onChange={handleSearchChange}
        value={searchText}
      />
      <select 
        name="filter" 
        onChange={handleCategoryChange} 
        value={filterItem}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
