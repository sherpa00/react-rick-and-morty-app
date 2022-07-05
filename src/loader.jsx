import gif from "./gifbg1.webp";

function Loader() {
    return ( 
        <div style={{width:"100%",height: "80vh",blur: "10px"}}>
            <img src={gif} alt="pic"/>
        </div>
     );
}

export default Loader;