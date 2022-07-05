import {Link} from "react-router-dom";
import logo from "../logo.jpg";


function NavBar() {

    const linkStyle = {
        color: "black",
        textDecoration: "none",
        fontWeight: "600"
    }

    const handleClick = (e) => {
        console.log(e.target.className);
        const navs = document.querySelector(".nav-links")
        if (e.target.className === "fa fa-bars") {
            e.target.className = "fa fa-window-close";
            navs.style.top = "80px"
            navs.style.display = "flex";
        } else {
            e.target.className = "fa fa-bars";
            navs.style.top = "-1000px";
            navs.style.display = "none";
        }
    }

    const body = document.querySelector("body");
    const navs = document.querySelector(".nav-links")
    body.onresize = () => {
        if (window.innerWidth >= 800) {
            navs.style.display = "flex";
        }
    }

    return ( 
        <nav>
            <Link to="/" style={linkStyle}>
                <img src={logo} alt="logo"/>
            </Link>
            <ul className="nav-links">
                <li>
                    <Link to="/" style={linkStyle}>Home</Link>
                </li>
                <li>
                    <Link to="/characters" style={linkStyle}>Characters</Link>
                </li>
                <li>
                    <Link to="/episodes" style={linkStyle}>Episodes</Link>
                </li>
                <li>
                    <Link to="/locations" style={linkStyle}>Locations</Link>
                </li>
                
            </ul>
            <h2>
            <i className="fa fa-bars" onClick={handleClick} style={{cursor: "pointer"}}></i>
            </h2>
        </nav>
     );
}

export default NavBar;