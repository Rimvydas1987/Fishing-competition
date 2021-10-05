import React, {useState, useEffect} from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Fisherman from './Fisherman';
import getId from '../Shared/id';
import Edit from './EditWindow';

function Main() {

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
            if (participantsCopy[i].id === id) {
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
            if (participantsCopy[i].id === id) {
                participantsCopy.splice(i, 1);
                break;
            }
        }
        setParticipants(participantsCopy)
        localStorage.setItem('allParticipants', JSON.stringify(participantsCopy));
    }

    const change = (id, name, surname, fishingClub) => {
        setOpen(0);
        const participantsCopy = participants.slice();
        for(let i = 0; i < participantsCopy.length; i++){
            if (participantsCopy[i].id === id) {
                participantsCopy[i].name = name;
                participantsCopy[i].fishingClub = fishingClub;
                participantsCopy[i].surname = surname;
                break;
            }
        }
        setParticipants(participantsCopy)
        localStorage.setItem('allParticipants', JSON.stringify(participantsCopy));
    }

    const saveCatch = (id, catchWeight) => {
        setOpen(0);
        const participantsCopy = participants.slice();
        for(let i = 0; i < participantsCopy.length; i++){
            if (participantsCopy[i].id === id) {
                participantsCopy[i].catchWeight = catchWeight;
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
                    <header>
                        <div class="overlay">
                            <h1>Fishing Competition</h1>
                            <h3>Good time guaranteed</h3>
                            <Link to={'home'}><button class="main-button">HOME</button></Link>
                            <Link to={'registration'}><button class="main-button">REGISTRATION</button></Link>
                            <Link to={'leaderboard'}><button class="main-button">LEADERBOARD</button></Link>
                        </div>
                    </header>
                    <Switch>
                    <Route path={'/home'}>
                        <div className="cards-div">
                            <div>
                                {participants.map((b, i) => <Fisherman open={openEdit} key={b.id}  id={b.id} name={b.name} surname={b.surname} club={b.fishingClub} prize={b.catchWeight} change={changeWeight}/>)}
                            </div>
                        </div>
                    </Route>
                    <Route path={'/registration'}>
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
                    <Edit className = "" id={open} close={closeEdit} erase={deleteFisherman} save={change}></Edit>
                    </Route>
                    <Route path={'/leaderboard'}>

                    </Route>
                    </Switch>
                </div>
            </>
        );
    }

    
export default Main;