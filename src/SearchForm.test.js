import React from 'react';
import { render,screen,fireEvent, waitFor} from '@testing-library/react';
import SearchForm from './SearchForm'; // Assuming the component is named SearchForm and is imported from './SearchForm'


describe('SearchForm component', () => {
  test ('renders an input with the value equal to initial value passed in props', () => {
    const initialValue = 'Caren';
    const handleSearch = jest.fn();
    render(<SearchForm initialQuery={initialValue} onSearch={handleSearch}/>);
    expect(screen.getByDisplayValue('Caren')).toBeInTheDocument();
  })
  
  test('click event on the Submit button, the "onChange" prop is called with proper value',async()=>{
    const initialQuery = 'Caren';
    const handleSearch = jest.fn();
    render(<SearchForm initialQuery={initialQuery} onSearch={handleSearch}/>);
    const inputElement = screen.getByTestId('my-input');
    const submitButton = await waitFor(()=>screen.getByTestId('submit-button'));
    expect(inputElement.value).toBe(initialQuery);
    expect(submitButton).toBeInTheDocument();
    const newQuery = 'car';
    fireEvent.change(inputElement, { target: { value: newQuery } });
    handleSearch(inputElement.value);
    //fireEvent.click(submitButton);
    expect(handleSearch).toHaveBeenCalledWith('car'); 
   })
});