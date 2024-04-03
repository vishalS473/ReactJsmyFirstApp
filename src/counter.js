import React, { useState } from "react";

export default function Counter({initialvalue}){
    
    const[count,setCount]=useState(initialvalue);
    const handleIncrement = (countervalue) =>{
        setCount(count+countervalue);
    };

    return(
        <div className="container my-5">
        <h1 className="my -5">The count is {count}</h1>
        <br/>
            <button className="btn btn-success mx-3" onClick={()=>handleIncrement(1)}>Increment</button>
            <button className="btn btn-danger mx-3" onClick={()=>handleIncrement(-1)}>Decrement</button>
            <button className="btn btn-secondary mx-3" onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}

