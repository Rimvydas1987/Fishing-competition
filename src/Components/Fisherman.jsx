import React, {useState} from 'react';
    function Fisherman (props) {

        const [editInput, setEditInput] = useState('');

        const editInputHandler = (e) => {
            setEditInput(e.target.value);
        }

        return (  
            <div className = "">
                <span className = "text">{props.name} {props.surname} total catch: {props.catch} kg</span>
                <button className = "main-button" onClick={()=>props.delete(props.id)}>delete</button>
                {/* <button className = "main-button" onClick={()=>props.edit(props.id)}>reset</button> */}
                <div className = "">
                    <input className="updateInput" type="number" value={editInput} onChange={editInputHandler}/>
                    <button className="input-buttonSmallUpdate" onClick={()=>props.change(props.id, editInput)}>add weight</button>
                </div>
            </div>);
}  


export default Fisherman;