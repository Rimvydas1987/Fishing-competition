    function FishermanReg ({id, open, name, surname, club, prize}) {

        return (  
            <div className = "background">
                <span className = "text flex">Name: {name}</span>
                <span className = "text flex">Surname: {surname}</span>
                <span className = "text flex">Fishing Club: {club} </span>
                <span className = "text flex">Total catch: {prize} kg</span>
                <div>
                    <button className = "edit-button" onClick={() => open(id)}>edit</button>
                </div>
            </div>);
}  

export default FishermanReg;