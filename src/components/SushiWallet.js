import React, { useState } from "react";

function SushiWallet({onAddMoney}){
    const [value, setValue]=useState(0);

    function handleSubmit(e){
        e.preventDefault()
        onAddMoney(value);
        setValue(0)
    }

    function handleValueChange(event){
        const value=parseInt(event.target.value,10)
        setValue(value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={value} onChange={handleValueChange}/>
            <button type="submit">Add $ to Budget</button>
        </form>
    )
}

export default SushiWallet