import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css"
import About from "./About";
import Project from "./Project";
function home() {
  return (
    
    <div className="homectn">
    <center className="home">
    <h1 className="name">Vikrant Prajapati</h1>
    
      <p className="myskill">
        I am a
        <span className="typeeffect">
        <Typewriter 
        className = "typeeffect"
          words={[
            "MERN Stack Developer",
          ]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={20}
          deleteSpeed={20}
          delaySpeed={2000}
        />
        </span>
      </p>
      <div className="iconbar">
      <div className="icon"><a href="https://wa.me/919149209580"><i className=" fa-brands fa-square-whatsapp"></i></a></div>
        <div className="icon"><a href="https://www.linkedin.com/in/vikrant-prajapati-b82b5a269"><i className=" fa-brands fa-linkedin"></i></a></div>
        <div className="icon"><a href="mailto: prajapativikrant2020@gmail.com.com"><i className=" fa-solid fa-envelope"></i></a></div>
      </div>
      </center>
      
     




      </div>
    
     
    
  );
}
export default home;
