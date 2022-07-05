
import logo from "./newLogo.jpg"

import {Link} from "react-router-dom";
import RandomQuotes from "./components/RandomQuotes";
import Services from "./components/services";


const linkStyle = {
    textDecoration: "none",
    color: "black",
    padding: "15px"
}

function Home() {

    return ( 
        <div className="home">
            <CoverBg/>
            <RandomQuotes/>
            <Services/>
            <About/>
        </div>
     );
}

function CoverBg() {

    const handleHover = (e) => {
        e.target.style.color = "lightgreen";
    }

    const handleOut = (e) => {
        e.target.style.color = "black";
    }

    return ( 
        <div className="coverBg">
            <h2>RICK-N-MORTY'NESS!!</h2>
            <p>Hey,want to know more about your favourite show and its bits and bites,
                <br></br>alas you've come to right place.Here you can find every characters,episodes and locations
                <br></br>from the show.So,Explore all the things you can find here to quich your rick-n-mortiness.</p>
            <button>
                <Link to="/characters" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleOut}>Explore Characters</Link>
            </button>
        </div>
     );
}


function About() {
    return ( 
        <div className="about" id="about">
            <h2>ABOUT</h2>
            <div className="about-box">
                <img src={logo} alt="rick-and-morty"/>
                <h3>RICK AND MORTY APP</h3>
                <p>
                    This is app made by me,myself is a common place for rick and morty show fans to showcase all the characters,episodes and locations of the show.
                    If in case you don't know about the show read below some paragraph or learn more about the show <a href="https://en.wikipedia.org/wiki/Rick_and_Morty">here</a><br></br>
                Rick and Morty is a hilarious new show by the genius behind Community seasons 1-3 and 5, Dan Harmon. The episodes so far have always seemed fresh and the writing is hilarious and creative. But then there's no surprise really since its co-creator created Community.

The hilarious mixture of wittiness, slapstick and action all add to making this show one of the best cartoons I have ever seen.

To be fair, you have to have a very high IQ to understand Rick and Morty. The humour is extremely subtle, and without a solid grasp of theoretical physics most of the jokes will go over a typical viewer's head. There's also Rick's nihilistic outlook, which is deftly woven into his characterisation - his personal philosophy draws heavily from Narodnaya Volya literature, for instance. The fans understand this stuff; they have the intellectual capacity to truly appreciate the depths of these jokes, to realize that they're not just funny- they say something deep about LIFE. As a consequence people who dislike Rick and Morty truly ARE idiots- of course they wouldn't appreciate, for instance, the humour in Rick's existencial catchphrase "Wubba Lubba Dub Dub," which itself is a cryptic reference to Turgenev's Russian epic Fathers and Sons I'm smirking right now just imagining one of those addlepated simpletons scratching their heads in confusion as Dan Harmon's genius unfolds itself on their television screens. What fools... how I pity them. 😂 And yes by the way, I DO have a Rick and Morty tattoo. And no, you cannot see it. It's for the ladies' eyes only- And even they have to demonstrate that they're within 5 IQ points of my own (preferably lower) beforehand.
                </p>
            </div>
        </div>
     )
}


export default Home;
