import { useState } from "react";
import AllEpisodes from "./allEpisodes";
import EpisodeBox from "./episodeBox";

const url = "https://rickandmortyapi.com/api/episode/?name="

function Episodes() {

    const [search,setSearch] = useState("");
    const [next,setNext] = useState("");
    const [searchRes,setSearchRes] = useState([]);
    const [count,setCount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        let new_url = url + search;
        setSearchRes([]);
        fetchDate(new_url);
    }

    const handleChage = (e) => {
        setSearch(e.target.value);
        setSearchRes([]);
        setCount(0);
    }

    const fetchDate = (url) => {
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            if (data.error) {
                return;
            }
            setSearchRes(prevState => [...prevState,...data.results]);
            setNext(data.info.next);
            setCount(data.info.count);
        })
    }

    const handleClick = (e) => {
        if (next === null) {
            alert("NO MORE RESULTS");
            return;
        }
        fetchDate(next);
    }

    return ( 
        <div className="episodes">
            <h1>SEARCH EVERY EPISODES HERE</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="..type episode name"
                    value={search}
                    onChange={handleChage}

                />
                <button type="submit">SEARCH</button>
            </form>
            {
                searchRes.length <= 0 ? null : <div className="search-res">
                    <p>{count} results found</p>
                    <div className="search-res-list">
                    {
                        searchRes.map((el,ind) => {
                            return <EpisodeBox
                                        name={el.name}
                                        episode={el.episode}
                                        date={el.air_date}
                                        key={el.id}
                                    />
                        })
                    }
                    </div>
                    <button onClick={handleClick}>GET NEXT</button>
                </div>
            }
            <h3>FIND EVERY EPISODES HERE</h3>
            <div className="all-episodes">
                <AllEpisodes/>
            </div>
        </div>
     );
}

export default Episodes;