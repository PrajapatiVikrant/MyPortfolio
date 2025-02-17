import React from "react";

export default function Navbar(){

    return (
       <div className="flex z-20 fixed  w-[100%] justify-center">
          <div className="bg-[rgba(0,0,0,0.3)] border text-white border-gray-300 p-4">
             <span className="p-2 hover:border-b-2 hover:border-white cursor-pointer"><a href="#home">Home</a></span>
             <span className="p-2 hover:border-b-2 hover:border-white cursor-pointer"><a href="#about">About</a></span>
             <span className="p-2 hover:border-b-2 hover:border-white cursor-pointer"> <a href="#experience">Experience</a></span>
             <span className="p-2 hover:border-b-2 hover:border-white cursor-pointer"><a href="#projects">Project</a></span>
          </div>
       </div>
    )
}