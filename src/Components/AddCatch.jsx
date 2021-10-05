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
            <div className = "windowCatch">
                <div>
                    <div>
                        <span>Weight: </span>
                        <input className="catch-input" type="number" value={editCatch} onChange={editCatchInputHandler}/>
                    </div>
                </div>
                <div>
                    <button className = "catch-button" onClick={()=>saveCatch(id, editCatch)}>Add</button>
                    <button className = "catch-button" onClick={()=>close(id)}>Cancel</button>
                </div>
            </div>);
}  


export default AddCatch;