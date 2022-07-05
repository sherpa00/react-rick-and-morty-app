import { useState } from "react";
import AllLocation from "./allLocations";
import LocationBox from "./locationBox";

const url = "https://rickandmortyapi.com/api/location/?name="

function Locations() {
    const [search,setSearch] = useState("");
    const [count,setCount] = useState(0);
    const [searchRes,setSearchRes] = useState([]);
    const [next,setNext] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
        setCount(0);
        setSearchRes([]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newUrl = url + search;
        fetchDate(newUrl);
    }

    const fetchDate = (url) => {
        fetch(url).then((data) => {
            return data.json();
        }).then((res) => {
            if (res.error) {
                return;
            }
            setCount(res.info.count);
            setNext(res.info.next);
            setSearchRes(prevState => [...prevState,...res.results])
        })
    }

    const handleClick = () => {
        fetchDate(next);
    }

    return ( 
        <div className="locations">
            <h1>SEARH EVERY LOCATION HERE</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="...type location name"
                    valeu={search}
                    onChange={handleChange}
                />
                <button type="submit">SEARCH</button>
            </form>
            {
                searchRes.length <= 0 ? null : <div className="search-res">
                    <p>{count} results found</p>
                    <div className="search-list">
                        {
                            searchRes.map((el,index) => {
                                return <LocationBox
                                            name={el.name}
                                            type={el.type}
                                            dimension={el.dimension}
                                            key={el.id}
                                        />
                            })
                        }
                    </div>
                    {
                        count <= searchRes.length ? null : <button onClick={handleClick}>GET NEXT</button>
                    }   
                </div>
            }
            <div className="all-location">
                <AllLocation/>
            </div>
            
            
        </div>
     );
}

export default Locations;
