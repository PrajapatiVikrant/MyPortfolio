
import "./App.css";
import { Link } from "react-router-dom";
import { Route,Routes } from 'react-router-dom';
import Home from "./Home";
import resume from "./Vikrant_Prajapati_resume.pdf"
import Navbar from "./component/Navbar";
import About from "./About";
import Project from "./Project";

function App() {
  

  return (
    <div className="p-">
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
    </div>
   
  );
}

export default App;
