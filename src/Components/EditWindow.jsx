import React, {useState} from 'react';
    function Edit ({id, name, surname, club, erase, close, save}) {

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
                <div className="line">
                    <span className = "text flex">Name: </span>
                    <input className="catch-input" type="text" value={editName} onChange={editNameInputHandler}/>
                    <span className = "text flex">Surame: </span>
                    <input className="catch-input" type="text" value={editSurname} onChange={editSurnameInputHandler}/>
                    <span className = "text flex">Fishing Club: </span>
                    <input className="catch-input" type="text" value={editFishingClub} onChange={editFishingClubInputHandler}/>
                </div>
                <div>
                    <button className = "edit-button" onClick={()=>save(id, editName, editSurname, editFishingClub)}>save</button>
                    <button className = "delete-button" onClick={()=>erase(id)}>delete</button>
                    <button className = "edit-button" onClick={()=>close(id)}>cancel</button>
                </div>
            </div>);
}  


export default Edit;