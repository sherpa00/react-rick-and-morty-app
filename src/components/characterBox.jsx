function CharacterBox(props) {
    return ( 
        <div className="character-box">
            <img src={props.image} alt="img"/>
            <h2>{props.name}</h2>
            <p><b>Species</b>: {props.species}</p>
            <p><b>Status</b>: {props.status} ( <i className={props.status === "Alive" ? "fa fa-user-plus" : "fa fa-user-times"} ></i>)</p>
            <p><b>Gender</b>: {props.gender} ( <i className={props.gender === "Male" ? "fa fa-male" : "fa fa-female"}></i> )</p>
            <p><b>Origin</b>: {props.origin}</p>
            <p><b>Last Seen at</b>: {props.location}</p>
        </div>
     );
}

export default CharacterBox;