import React, { useState } from "react";

export default function SearchForm({initialQuery,onSearch}) {

    const [query,SetQuery] = useState(initialQuery);

    const handleInputChange = (event) => {
        SetQuery(event.target.value);
      };

      const handleSearch =() =>{
        onSearch(query);
      }

      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          onSearch(query);
        }
      };

    return (
        <div className="container my-5">
            <h1 className="my-5">Search Form</h1>
            <input type="text" value={query} onChange={handleInputChange} onKeyDown={handleKeyPress} />
            <button onClick={handleSearch}>Search</button>
            <br />
        </div>
    )
}
