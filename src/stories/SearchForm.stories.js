import React, { useState } from 'react';
import SearchForm from '../SearchForm';
import Name from '../first-names.json';

export default {
  title: 'SearchForm',
  component: SearchForm,
};
export const Default = (args) => {
  const [searchResults, setSearchResults] = useState(Name);
  const handleSearch = (query) => {
    if (!query) {
      setSearchResults(Name);
    }
    else {
      const results = Name.filter(Name => Name.toLowerCase().includes(query)).map(Name => { return <div>{Name}</div> })
      setSearchResults(results);
    }
  };
  return (
    <SearchForm initialQuery="Caren" onSearch={handleSearch} {...args} />
   
  )
};
Default.args ={
  Primary:true,
  initialQuery:"Caren",
  onSearch:()=>{}
};