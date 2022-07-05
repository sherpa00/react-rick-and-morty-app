import { useEffect, useState } from "react";
import CharacterBox from "./characterBox";

const url = "https://rickandmortyapi.com/api/character";

function AllCharacters() {
    const [ list, setList ] = useState(null);
    const [next,setNext] = useState("");

    useEffect(() => {
        fetchCharacters(url);
    },[])

    const fetchCharacters = (base) => {
        fetch(base).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            setNext(data.info.next);
            setList(data.results);
        })
    }

    const handleClick = () => {
        fetchCharacters(next);
    }

    return ( 
        <div className="alllist">
            <div className="alllist-box">
            {
                
                list === null ? <h3>Nothing to show</h3> : list.map((el,index) => {
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
            <button
                onClick={handleClick}
            >
                GET NEXT
            </button>

        </div>
     );
}

export default AllCharacters;