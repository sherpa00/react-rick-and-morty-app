function LocationBox(props) {
    return ( 
        <div className="location-box">
            <h2>{props.name}</h2>
            <p><b>TYPE</b>: {props.type}</p>
            <p><b>DIMENSION</b>: {props.dimension}</p>
        </div>
     );
}

export default LocationBox;