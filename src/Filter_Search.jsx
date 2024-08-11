//Use the provided input field, display filtered list of items when typing that match typing

import React, { useState } from "react";

export const FirstQuestion = () => {
    const fruits = [
        "Apples",
        "Apricots",
        "Banana",
        "Blueberry",
        "Cherry",
        "Cranberyy",
        "Date",
        "Dragonfruit",
        "Elderberry",
        "Fig",
        "Grapes",
        "Grapefuit"
    ];
    
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e)=>{
        setSearchTerm(e.target.value);
    }

    const fruitsFiltered = fruits.filter(fruit => {
        return fruit.toLowerCase().includes(searchTerm.toLowerCase())
    }) 

    return (
        <div>
            <input type="text" placeholder="Search here"
                onChange={handleInputChange}
            />

            {fruitsFiltered.length === 0 ? <p>No matching fruits</p> :
            fruitsFiltered.map(fruit => {
                return <p>{fruit}</p>
            })}
        </div>
    )
}