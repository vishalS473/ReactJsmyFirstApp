import React, { useState } from 'react';

export default function GenreList({ genres, selectedGenre, handleGenreSelect }) {

  let selectedMovies =[];
    switch(selectedGenre)
    {
      case 'Action':
        selectedMovies=['The Dark Knight', 'Inception', 'Avengers'];
        break;
      case 'Adventure':
        selectedMovies=['Indiana Jones', 'Jurassic Park', 'Pirates of the Caribbean'];
        break;
      case 'Comedy':
        selectedMovies=['The Hangover', 'Superbad', 'Dumb and Dumber'];
        break;
      case 'Drama':
        selectedMovies=['The Shawshank Redemption', 'Forrest Gump', 'The Godfather'];
        break;
      case 'Fantasy':
        selectedMovies=['Harry Potter', 'The Lord of the Rings', 'Avatar'];
        break;
    }
    return (
      <div className="container my-5">
         <h1 className="my-5">Movies Genre</h1>
        {genres.map(genre => (
          <button
            key={genre}
            onClick={() => {handleGenreSelect(genre)}}
            style={{ backgroundColor: genre === selectedGenre ? 'lightblue' : 'white' }}
          >
            {genre}
          </button>
        ))}
        <br/>
        <h3 className="my-5">Genre Selected :{selectedGenre}</h3>
        <ul>
            {selectedMovies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
                </ul>
      </div>
    );
  };