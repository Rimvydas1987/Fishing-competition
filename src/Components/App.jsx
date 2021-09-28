import React, {useState, useEffect} from 'react';
import Fisherman from './Fisherman';
import getId from '../Shared/id';

function App() {

    const [participants, setParticipants] = useState([]);

    const [nameInput, setNameInput] = useState('');
    const [surnameInput, setSurnameInput] = useState('');

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
                        catchWeight: 0,
                        
        };
        const participantsCopy = participants.slice();
        participantsCopy.push(fisherman);
        setParticipants(participantsCopy)

        localStorage.setItem('allParticipants', JSON.stringify(participantsCopy));
    }

    const changeWeight = (id, weight) => {
        const participantsCopy = participants.slice();
        for(let i=0; i < participantsCopy.length; i++){
            if (participantsCopy[i].id == id) {
                participantsCopy[i].catchWeight += parseInt(weight);

                break;
            }

        }
        setParticipants(participantsCopy)
        localStorage.setItem('allParticipants', JSON.stringify(participantsCopy));
    }

    const deleteFisherman = (id) => {
        const participantsCopy = participants.slice();
        for(let i=0; i < participantsCopy.length; i++){
            if (participantsCopy[i].id == id) {
                participantsCopy.splice(i, 1);
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

        return (
            <>
            <div>
                <div>
                    <input type="text" value={nameInput} onChange={nameInputHandler}/>
                    <input type="text" value={surnameInput} onChange={surnameInputHandler}/>
                    <button className="input-button" onClick={()=>addParticipant()}>Add Participants</button>
                </div>
                <div className="field">
                    <div className="farm">
                        {participants.map((b, i) => <Fisherman key={b.id} delete={deleteFisherman} id={b.id} name={b.name} surname={b.surname} catch={b.catchWeight} change={changeWeight}/>)}
                    </div>
                    
                </div>
            </div>
            </>
        );
    }

    
export default App;