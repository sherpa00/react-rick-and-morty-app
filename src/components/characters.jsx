import { useState } from "react";
import AllCharacters from "./allCharacters";
import CharacterBox from "./characterBox";

const url = "https://rickandmortyapi.com/api/character/?name=";

function Characters() {
    const [text,setText] = useState("");
    const [searchResult,setSearchResult] = useState([]);
    const [next,setNext] = useState("");
    const [count,setCount] = useState(0);

    const handleChange = (e) => {
        setSearchResult([]);
        setText(e.target.value);
        setCount(0);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newUrl = url + text;
        setSearchResult([]);
        fetchData(newUrl);
    }

    const fetchData = (url) => {
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            if (data.error) {
                console.log("SEARCH ERROR");
                setCount(0);
            } else {
                setSearchResult(prevState => [...prevState,...data.results]);
                setNext(data.info.next);
                setCount(data.info.count);
            }
        })
    }

    const handleClick = () => {
        if (next === null) {
            alert("NO MORE RESULTS");
        } else {
            fetchData(next);
        }
        
    }

    return ( 
        <div className="characters">
            <h2 id="head">SEARCH YOUR FAVOURITE CHARACTER</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="..type something"
                    value={text}
                    onChange={handleChange}
                />
                <button type="submit">SEARCH</button>
            </form>
            {
                count === 0 ? null : <h4>{count} Results found</h4>
            }

            <div className="result">
                {
                    searchResult === [] ? <h3>CANNOT FIND ANY RESULT</h3> : searchResult.map((el,index) => {
                        return <CharacterBox
                                        key={el.id}
                                        name={el.name}
                                        image={el.image}
                                        status={el.status}
                                        location={el.location.name}
                                        origin={el.origin.name}
                                        species={el.species}
                                        gender={el.gender}
                                />
                    })
                }
            </div>

            {count <= 0 ? null : <button onClick={handleClick} id="next">
                SHOW MORE
            </button>
            }
            
            <div className="everyCharacter">
                <h3>FIND EVERY CHARACTER HERE</h3>
                <AllCharacters/>
            </div>
        </div>
     );
}

export default Characters;