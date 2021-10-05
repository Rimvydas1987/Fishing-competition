
    function Fisherman ({id, editCatch, name, surname, club, prize}) {

        return (  
            <div className = "background">
                <span className = "text flex">{name} {surname}</span>
                <span className = "text flex">Fishing Club: {club} </span>
                <span className = "text flex">Total catch: {prize} kg</span>
                <div>
                    <button className = "edit-button" onClick={() => editCatch(id)}>Add Catch</button>
                </div>
            </div>);
}  


export default Fisherman;