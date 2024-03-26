import { render } from "@testing-library/react";
import GenreList from "./GenreList";
import {React,screen,fireEvent} from '@testing-library/react';

describe('Genre List Components',()=>{
    test('component renders all genres passed in props',()=>{
        const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'];
        const selectedGenre =jest.fn();
        const handleGenreSelect =jest.fn();
        render(<GenreList genres={genres} selectedGenre={selectedGenre} handleGenreSelect={handleGenreSelect}/>)
        genres.forEach(genre => {
        const genreButton = screen.getByText(genre);
        expect(genreButton).toBeInTheDocument();
     });
   });
   test('highlights selected genre passed in props', () => {
    const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'];
    const selectedGenre ='Action';
    const handleGenreSelect =jest.fn();
    render(<GenreList genres={genres} selectedGenre={selectedGenre} handleGenreSelect={handleGenreSelect}/>);
    expect(screen.getByText('Genre Selected :Action')).toBeInTheDocument();
  });

   test('calls onChange callback with correct genre after clicking genre button', () => {
    const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'];
    const selectedGenre =jest.fn();
    const handleGenreSelect =jest.fn();
    render(<GenreList genres={genres} selectedGenre={selectedGenre} handleGenreSelect={handleGenreSelect} />);
    const genreToSelect = 'Comedy';
    const genreButton = screen.getByText(genreToSelect);
    fireEvent.click(genreButton);
    expect(handleGenreSelect).toHaveBeenCalledWith('Comedy');
  });
});
