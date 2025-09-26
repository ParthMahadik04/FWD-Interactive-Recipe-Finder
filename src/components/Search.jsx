// src/components/Search.jsx
import React, { useState } from "react";
import "../index.css";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() === "") {
      alert("Please enter some ingredients!");
      return;
    }
    onSearch(input.trim());
  };

  return (
    <section className="search-section">
      <input
        type="text"
        placeholder="Enter ingredients"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Find Recipes</button>
    </section>
  );
};

export default Search;
