import React, { useState } from 'react';

export default function GenreList({ genres, selectedGenre, onSelect }) {
  
   const[Movies,setMovies]=useState([]);
   const MovieGenre = (movgenre) =>{
    if (movgenre == 'Action') {
        setMovies(['The Dark Knight', 'Inception', 'Avengers']);
    }
    else if (movgenre == 'Adventure') {
        setMovies(['Indiana Jones', 'Jurassic Park', 'Pirates of the Caribbean']);
    } else if (movgenre === 'Comedy') {
        setMovies(['The Hangover', 'Superbad', 'Dumb and Dumber']);
    } else if (movgenre === 'Drama') {
        setMovies(['The Shawshank Redemption', 'Forrest Gump', 'The Godfather']);
    } else if (movgenre === 'Fantasy') {
        setMovies(['Harry Potter', 'The Lord of the Rings', 'Avatar']);
    }
   }
    return (
      <div className="container my-5">
         <h1 className="my-5">Movies Genre</h1>
        {genres.map(genre => (
          <button
            key={genre}
            onClick={() => {onSelect(genre);MovieGenre(selectedGenre)}}
            style={{ backgroundColor: genre === selectedGenre ? 'lightblue' : 'white' }}
          >
            {genre}
          </button>
        ))}
        <br/>
        <h3 className="my-5">Genre Selected :{selectedGenre}</h3>
                <ul>
                    {Movies.map((movie, index) => (
                        <li key={index}>{movie}</li>
                    ))}
                </ul>
      </div>
    );
  };