function EpisodeBox(props) {
    return ( 
        <div className="episode-box">
            <h2>{props.name}</h2>
            <p><b>Season-episode</b>: {props.episode}</p>
            <p><b>Released Date</b>: {props.date}</p>
        </div>
     );
}

export default EpisodeBox;