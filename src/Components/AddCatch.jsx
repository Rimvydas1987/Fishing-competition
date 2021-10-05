import React, {useState} from 'react';
    function AddCatch ({id, close, saveCatch}) {

        const [editCatch, setEditCatch] = useState('');


        const editCatchInputHandler = (e) => {
            setEditCatch(e.target.value);
        }


        if (id === 0) {
            return null;
        }
        return (  
            <div className = "window">
                <div>
                    <div>
                        <span className = "text">Name: </span>
                        <input className="windNameInput" type="text" value={editCatch} onChange={editCatchInputHandler}/>
                    </div>
                </div>
                <div className="window-buttons">
                    <button className = "edit-button" onClick={()=>saveCatch(id, editCatch)}>save</button>
                    <button className = "edit-button" onClick={()=>close(id)}>cancel</button>
                </div>
            </div>);
}  


export default AddCatch;