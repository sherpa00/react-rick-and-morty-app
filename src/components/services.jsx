import { Link } from "react-router-dom";

function Services() {
    return ( 
        <div className="services">
            <h2>FIND WHAT YOU"RE LOOKING FOR</h2>
            <div className="service-list">
            <ServiceBox 
                name="FIND CHARACTERS"
                icon="fa fa-user"
                paragraph="search and get to know your favourtie characters from your favourite show."
                link="/characters"
            />

            <ServiceBox 
                name="FIND EPISODES"
                icon="fa fa-play-circle-o"
                paragraph="search and get to know some episodes from your favourite show."
                link="/episodes"
            />

            <ServiceBox 
                name="FIND LOCATIONS"
                icon="fa fa-globe"
                paragraph="search and get to know your favourtie locations from your favourite show."
                link="/locations"
            />

            </div>
        </div>
     );
}

function ServiceBox(props) {

    const handleClick = () => {
        console.log("btn clicked");
    }

    const style={
        color: "lightgreen",
        textDecoration: "none",
    }

    return ( 
        <div className="service-box">
            <h2><i className={props.icon}></i></h2>
            <h3>{props.name}</h3>
            <p>{props.paragraph}</p>
            <button onClick={handleClick}>
                <Link to={props.link} style={style}>Explore</Link>
            </button>


        </div>
     );
}

export default Services;