import React from "react";
import Counter from "./counter";
import { fireEvent, render,screen } from "@testing-library/react";

test('renders initial value in props',() =>{
    const initialvalue =5;
    render(<Counter initialvalue={initialvalue}/>);
    const textElement = screen.getByText('The count is 5');
    expect(textElement).toBeInTheDocument();
});

test('Testing decrement button',() =>{
    const initialvalue =5;
    render(<Counter initialvalue={initialvalue}/>);
    const getdecrmentbutton = screen.getByText('Decrement');
    fireEvent.click(getdecrmentbutton);
    const textElement = screen.getByText('The count is 4');
    expect(textElement).toBeInTheDocument();
})

test('Testing increment button',() =>{
    const initialvalue =5;
    render(<Counter initialvalue={initialvalue}/>);
    const getincrementbutton = screen.getByText('Increment');
    fireEvent.click(getincrementbutton);
    const textElement = screen.getByText('The count is 6');
    expect(textElement).toBeInTheDocument();
})
