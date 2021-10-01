import React, {useState, useEffect} from 'react';
import Fisherman from './Fisherman';
import getId from '../Shared/id';
import Edit from './EditWindow';

function App() {

    const [participants, setParticipants] = useState([]);
    const [nameInput, setNameInput] = useState('');
    const [surnameInput, setSurnameInput] = useState('');
    const [fishingClubInput, setFishingClubInput] = useState('');
    const [open, setOpen] = useState(0);

    useEffect(() => {
        const participantsCopy = JSON.parse(localStorage.getItem('allParticipants'));
            if (null === participantsCopy) {
                return;
            }
        setParticipants(participantsCopy);
    },[]);

    const addParticipant = (a) => {
        const fisherman = {id: getId(), 
                        name: nameInput, 
                        surname: surnameInput,
                        fishingClub: fishingClubInput,
                        catchWeight: 0,
                        
        };
        const participantsCopy = participants.slice();
        participantsCopy.push(fisherman);
        setParticipants(participantsCopy)

        localStorage.setItem('allParticipants', JSON.stringify(participantsCopy));
    }

    const changeWeight = (id, weight) => {
        const participantsCopy = participants.slice();
        for(let i = 0; i < participantsCopy.length; i++){
            if (participantsCopy[i].id == id) {
                participantsCopy[i].catchWeight += parseInt(weight)/1000;

                break;
            }

        }
        setParticipants(participantsCopy)
        localStorage.setItem('allParticipants', JSON.stringify(participantsCopy));
    }

    const deleteFisherman = (id) => {
        setOpen(0);
        const participantsCopy = participants.slice();
        for(let i = 0; i < participantsCopy.length; i++){
            if (participantsCopy[i].id == id) {
                participantsCopy.splice(i, 1);
                break;
            }
        }
        setParticipants(participantsCopy)
        localStorage.setItem('allParticipants', JSON.stringify(participantsCopy));
    }

    const changeName = (id, name) => {
        const participantsCopy = participants.slice();
        for(let i = 0; i < participantsCopy.length; i++){
            if (participantsCopy[i].id == id) {
                participantsCopy[i].name = name;

                break;
            }
        }
        setParticipants(participantsCopy)
        localStorage.setItem('allParticipants', JSON.stringify(participantsCopy));
    }

    const changeSurname = (id, surname) => {
        const participantsCopy = participants.slice();
        for(let i = 0; i < participantsCopy.length; i++){
            if (participantsCopy[i].id == id) {
                participantsCopy[i].surname = surname;

                break;
            }
        }
        setParticipants(participantsCopy)
        localStorage.setItem('allParticipants', JSON.stringify(participantsCopy));
    }

    const changefishingClub = (id, fishingClub) => {
        const participantsCopy = participants.slice();
        for(let i = 0; i < participantsCopy.length; i++){
            if (participantsCopy[i].id == id) {
                participantsCopy[i].fishingClub = fishingClub;

                break;
            }
        }
        setParticipants(participantsCopy)
        localStorage.setItem('allParticipants', JSON.stringify(participantsCopy));
    }

    const nameInputHandler = (e) => {
        setNameInput(e.target.value)
    }
    const surnameInputHandler = (e) => {
        setSurnameInput(e.target.value)
    }
    const fishingClubInputHandler = (e) => {
        setFishingClubInput(e.target.value)
    }
    const openEdit = (id) => {
        setOpen(id);
    }

    const closeEdit = () => {
        setOpen(0);
    }

        return (
            <>
                <div>
                    <div className="registrationBoard">
                        <div>
                            <span className="participantsText">Name: </span>
                            <input className="participantsInput" type="text" value={nameInput} onChange={nameInputHandler}/>
                        </div>
                            <span className="participantsText">Surname: </span>
                            <input className="participantsInput" type="text" value={surnameInput} onChange={surnameInputHandler}/>
                        <div>
                            <span className="participantsText">Fishing Club: </span>
                            <input className="participantsInput" type="text" value={fishingClubInput} onChange={fishingClubInputHandler}/>
                        </div>
                        <button className="addParticipants-button" onClick={()=>addParticipant()}>Add Participant</button>
                    </div>
                    <div className="">
                        <div className="">
                            {participants.map((b, i) => <Fisherman open={openEdit} key={b.id}  id={b.id} name={b.name} surname={b.surname} club={b.fishingClub} prize={b.catchWeight} change={changeWeight}/>)}
                        </div>
                    </div>
                </div>
                <Edit className = "" id={open} close={closeEdit} erase={deleteFisherman} /* name={writeName} surname={writeSurname} club={writeFishingClub}*/ save={changeName, changeSurname /* changefishingClub */}></Edit>
            </>
        );
    }

    
export default App;