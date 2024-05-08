import React, { useState } from 'react';
import GenreList from '../GenreList';



export default {
  title: 'GenreList',
  component: GenreList,
};

export const Default = () =>{
    const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'];
    const [selectedGenre, setSelectedGenre] = useState('');
    const handleGenreSelect = (genre) => {
        setSelectedGenre(genre);
      }

return(
  <GenreList genres={genres} selectedGenre={selectedGenre} handleGenreSelect={handleGenreSelect}/>
  )
};