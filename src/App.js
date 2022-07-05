import React from "react";
import {Routes,Route} from "react-router-dom";
import NavBar from "./components/navbar";
//import Locations from "./components/Locations";
//import Home from "./Home";
import "./App.css"
//import Episodes from "./components/Episodes";
import Footer from "./components/Footer";
import quotesList from "./quotes.json"
import Loader from "./loader";
//import Characters from "./components/characters";


console.log(quotesList);

const Home = React.lazy(() => import("./Home"));
const Characters = React.lazy(() => import("./components/characters"))
const Locations = React.lazy(() => import("./components/Locations"))
const Episodes = React.lazy(() => import("./components/Episodes"))

function App() {
  return (
    <div className="App">
      <NavBar/>
      <React.Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/locations" element={<Locations/>}/>
          <Route path="/episodes" element={<Episodes/>}/>
        </Routes>
      </React.Suspense>
      <Footer/>
    </div>
  );
}

export default App;
