import { useEffect, useState } from "react";
import LocationBox from "./locationBox";

const url = "https://rickandmortyapi.com/api/location"

function AllLocation() {

    const [res, setRes] = useState([]);
    const [next,setNext] = useState("");

    useEffect(() => {
        fetchData(url);
    },[])

    const handleClick = () => {
        console.log("CliKded");
        fetchData(next);
    }

    const fetchData = (url) => {
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            setRes(data.results);
            setNext(data.info.next);
        })
    }

    return ( 
        <>
            <h3>FIND EVERY LOCATIONS HERE</h3>
            <div className="location-list">
                {
                    res.length <= 0 ? null : res.map((el,index) => {
                        return <LocationBox 
                                    key={el.id}
                                    name={el.name}
                                    type={el.type}
                                    dimension={el.dimension}
                                />
                    })
                }
            </div>
            <button onClick={handleClick}>GET NEXT</button>
        </>
     );
}

export default AllLocation;