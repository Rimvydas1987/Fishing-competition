import React, {useState} from 'react';
    function Edit ({id, erase, close, save}) {

        const [editName, setEditName] = useState('');
        const [editSurname, setEditSurname] = useState('');
        const [editFishingClub, setEditFishingClub] = useState('');

        const editNameInputHandler = (e) => {
            setEditName(e.target.value);
        }
        const editSurnameInputHandler = (e) => {
            setEditSurname(e.target.value);
        }
        const editFishingClubInputHandler = (e) => {
            setEditFishingClub(e.target.value);
        }

        if (id === 0) {
            return null;
        }
        return (  
            <div className = "window">
                <div>
                    <div>
                        <span className = "text">Name: </span>
                        <input className="windNameInput" type="text" value={editName} onChange={editNameInputHandler}/>
                    </div>
                    <div>
                        <span className = "text">Surname: </span>
                        <input className="windSurnameInput" type="text" value={editSurname} onChange={editSurnameInputHandler}/>
                    </div>
                    <div>
                        <span className = "text">Fishing Club: </span>
                        <input className="windFishingClubInput" type="text" value={editFishingClub} onChange={editFishingClubInputHandler}/>
                    </div>
                </div>
                <div className="window-buttons">
                    <button className = "save-cancel-button" onClick={()=>save(id, editName, editSurname, editFishingClub)}>save</button>
                    <button className = "delete-button" onClick={()=>erase(id)}>delete</button>
                    <button className = "save-cancel-button" onClick={()=>close(id)}>cancel</button>
                </div>
            </div>);
}  


export default Edit;