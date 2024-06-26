import React, { useState } from "react";

export default function SearchForm({initialQuery,onSearch}) {
        const handleSearch =(event) =>{
        event.preventDefault();
        onSearch(event.target.Search.value);
      }
      
    return (
        <div className="container my-5">
            <h1 className="my-5" data-testid="SearchForm">Search Form</h1>
            <form onSubmit={handleSearch}>
            <input name="Search" type="text" defaultValue ={initialQuery} data-testid="my-input"/>
            <button type="submit" data-testid="submit-button">Search</button>
            <br />
            </form>
        </div>
    )
}
