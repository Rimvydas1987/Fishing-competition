import React, {useState} from 'react';
    function Fisherman ({id, change, open, name, surname, club, prize}) {

        const [editInput, setEditInput] = useState('');

        const editInputHandler = (e) => {
            setEditInput(e.target.value);
        }

        return (  
            <div className = "background">
                <span className = "text flex">{name} {surname}</span>
                <span className = "text flex">Fishing Club: {club} </span>
                <span className = "text flex">Total catch: {prize} kg</span>
                <div className="line">
                    <span className = "text">Add Weight: </span>
                    <input className = "catch-input" type="number" value={editInput} onChange={editInputHandler}/>
                    <span className = "text">g</span>
                </div>
                <div>
                    <button className = "addCatch-button" onClick={()=>change(id, editInput)}>add</button>
                    <button className = "edit-button" onClick={()=>open(id)}>edit</button>
                </div>
            </div>);
}  


export default Fisherman;