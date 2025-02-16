import React from "react";
import "./Navbar.css"

export default function Navbar(){
    return (
        <div className="navbar">
              <div className="navlist">
                   <span className="nav-item">Home</span>
                   <span className="nav-item">About</span>
                   <span className="nav-item">Experience</span>
                   <span className="nav-item">Project</span>
              </div>
        </div>
    )
}