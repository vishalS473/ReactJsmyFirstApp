import React, { useState } from 'react';
import Counter from './counter.js';
import SearchForm from './SearchForm.js';
import GenreList from './GenreList.js';
import Name from './first-names.json';


const App = () => {

  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchResults, setSearchResults] = useState(Name);
  const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'];

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  }
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
    <div>
      <Counter initialvalue={5} />
      <SearchForm initialQuery="Caren" onSearch={handleSearch} />
      <ul>
        {searchResults.map(name => { return <div >{name}</div> })}
      </ul>
      <GenreList
        genres={genres}
        selectedGenre={selectedGenre}
        handleGenreSelect={handleGenreSelect}
      />
    </div>
  );
};

export default App;