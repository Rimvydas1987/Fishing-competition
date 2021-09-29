import React, {useState} from 'react';
    function Fisherman (props) {

        const [editInput, setEditInput] = useState('');

        const editInputHandler = (e) => {
            setEditInput(e.target.value);
        }

        return (  
            <div className = "background">
                <span className = "text">{props.name} {props.surname} Fishing Club: {props.club} </span>
                <span className = "text">total catch: {props.catch} kg</span>
                <input className="updateInput" type="number" value={editInput} onChange={editInputHandler}/>
                <span className = "text">g</span>
                <button className="input-buttonSmallUpdate" onClick={()=>props.change(props.id, editInput)}>add weight</button>
                <div>
                    <button className = "delete-button" onClick={()=>props.delete(props.id)}>delete</button>
                    {/* <button className = "main-button" onClick={()=>props.edit(props.id)}>reset</button> */}
                </div>
            </div>);
}  


export default Fisherman;