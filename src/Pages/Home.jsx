import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css"
function Home() {
  return (
    
    <div id="home" className="homeCtn sticky top-0 flex flex-col justify-center items-center" >
    
     <div>
     <h1 className="text-white text-center tracking-widest font-bold text-3xl lg:text-5xl" >Vikrant Prajapati</h1>
    
    <p className="text-white  text-[25px] lg:text-[25px] text-center">
      I am a
      <span className="text-2xl lg:text-[30px] ml-[10px] text-[burlywood]">
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
    <br />
   
     </div>
   
     <div className="flex  w-[80%] lg:w-[30%]  justify-around mt-[80px]">
    <div className="text-4xl text-[rgba(255,255,255,0.4)]" ><a href="https://wa.me/919149209580"><i className=" fa-brands fa-square-whatsapp"></i></a></div>
      <div className="text-4xl text-[rgba(255,255,255,0.4)]" ><a href="https://www.linkedin.com/in/vikrant-prajapati-b82b5a269"><i className=" fa-brands fa-linkedin"></i></a></div>
      <div className="text-4xl text-[rgba(255,255,255,0.4)]" ><a href="mailto: prajapativikrant2020@gmail.com.com"><i className=" fa-solid fa-envelope"></i></a></div>
    </div>
    
     
     
      </div>
    
     
    
  );
}
export default Home;