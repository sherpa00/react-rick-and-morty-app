import { useEffect, useState } from "react";
import EpisodeBox from "./episodeBox";
const url = "https://rickandmortyapi.com/api/episode";

function AllEpisodes() {

    const [searchRes,setSearchRes] = useState([]);
    const [next,setNext] = useState("");

    useEffect(() => {
        fetchData(url);
    },[]);

    const fetchData = (base) => {
        fetch(base).then((data) => {
            return data.json();
        }).then((res) => {
            console.log(res);
            setSearchRes(res.results);
            setNext(res.info.next)
        })
    }

    const handleClick = () => {
        fetchData(next);
    }

    /*
    const fetchCharacters = (arr) => {
        let newArr = [];
        for (let item of arr) {
            fetch(item).then((data) => {
                return data.json();
            }).then((res) => {
                newArr.push(res.name);
            })
        }
        console.log(newArr);
        setCharList(prevState => [...prevState,...newArr]);
    }
    const fetchchar = (e) => {
        let result = "";
        fetch(e).then((data) => {
            return data.json();
        }).then((res) => {
            setCharList(prevState => [...prevState,res.name])
        });
        console.log(result);
        return result
    }
    */

    return ( 
        <>
            <div className="all-episodes-list">
                {
                    searchRes === [] ? null : searchRes.map((el,index) => {
                        return <EpisodeBox
                                    name={el.name}
                                    episode={el.episode} 
                                    date={el.air_date}
                                    characters={el.characters}
                                    key={el.id}
                                />
                    })
                }
            </div>
            <button onClick={handleClick}>GET NEXT</button>
        </>
     );
}

export default AllEpisodes;