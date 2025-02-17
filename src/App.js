
import "./App.css";
import { Link } from "react-router-dom";
import { Route,Routes } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import resume from "./Vikrant_Prajapati_resume.pdf"

function App() {
  let flag = false;
  function click(){
    document.getElementById("nav").style.display = "none";
    document.getElementById("opennavbtn").innerHTML = "&#9776;"
    flag = false;
  }
  function opennav(){
       if(flag === false){
        document.getElementById("nav").style.display = "flex";
        document.getElementById("opennavbtn").innerHTML = "&times;"
        flag = true;
       }else{
        document.getElementById("nav").style.display = "none";
       document.getElementById("opennavbtn").innerHTML = "&#9776;"
       flag = false;
       }
       
  }

  return (
    <div className="fullbody">
 <div className="menu">
     <div className="smallcreen">
     <div className="logo">Vikrant</div>
      <div className="opennav" id="opennavbtn"  onClick={opennav}  >&#9776;</div>
     </div>
      
      <div className="nav" id="nav">
       
        <div className="item">
          <Link  className="link" onClick = {click} to="/">Home</Link>
        </div>
        <div className="item">
          <Link  className="link" onClick = {click} to="/about">About</Link>
        </div>
        <div className="item">
          <Link  className="link" onClick = {click} to="/project">Projects</Link>
        </div>
        <div className="item">
        <a href={resume} download="hello.pdf"  className="link" onClick={click}>Download Resume<i className="fa-solid fa-download"></i></a>
        </div>
       
      </div>
      <div className="nav1">
       
       <div className="item">
         <Link  className="link" to="/">Home</Link>
       </div>
       <div className="item">
         <Link  className="link" to="/about">About</Link>
       </div>
       <div className="item">
         <Link  className="link" to="/project">Projects</Link>
       </div>
       <div className="item">
         <a href={resume} download="vikrant_resume.pdf"  className="link"> Download Resume<i className="fa-solid fa-download"></i></a>
       </div>
       
     </div>
   

      
    </div>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/about" Component={About}/>
      <Route path="/project" Component={Project}/>
    </Routes>
    </div>
   
  );
}

export default App;
