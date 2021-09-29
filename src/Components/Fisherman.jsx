import React, {useState} from 'react';
    function Fisherman (props) {

        const [editInput, setEditInput] = useState('');

        const editInputHandler = (e) => {
            setEditInput(e.target.value);
        }

        return (  
            <div className = "background">
                <span className = "text flex">{props.name} {props.surname}</span>
                <span className = "text flex">Fishing Club: {props.club} </span>
                <span className = "text flex">Total catch: {props.catch} kg</span>
                <div className="line">
                    <span className = "text">Add Weight: </span>
                    <input className="catch-input" type="number" value={editInput} onChange={editInputHandler}/>
                    <span className = "text">g</span>
                    <button className="addCatch-button" onClick={()=>props.change(props.id, editInput)}>add</button>
                </div>
                <div>
                    <button className = "delete-button" onClick={()=>props.delete(props.id)}>delete</button>
                    <button className = "edit-button" onClick={()=>props.edit(props.id)}>edit</button>
                </div>
            </div>);
}  


export default Fisherman;