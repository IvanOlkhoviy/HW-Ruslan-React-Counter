import React from "react";



function Button({count, changeCount, number}) {

    const plusCount = (number) => {
        count +=  number; 
        changeCount (count);
    } 

    
    return (
        <div className = "col-4">
            <button type="button" className ="btn btn-dark " onClick={()=> plusCount(number)}>Plus{number}</button>
        </div>
    )
}

export default Button;
