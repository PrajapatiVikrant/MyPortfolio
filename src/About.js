import React from "react";
import "./About.css"
import AboutCard from "./component/AboutCard";
function About() {
  return (
    <div className="text-">
      <h1 className="about-first-heading">About</h1>
      <h2 className="about-second-heading">Explore my world</h2>
      {/* <div className="summaryctn">
        <center>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhoRUyT78G5bgNynvNHFT2XnfziF3KHSuGuQofqkQH0VfY5gf5MFU2EtpBHuQ2kwh6Lc&usqp=CAU" alt="Loading" />
        </center>
        <div>
          <div>
          <hr style={{width:"20%",height:"5px",backgroundColor:"blue",border:"none",borderRadius:"5px"}} />
          <h3 style={{fontSize:'35px',paddingLeft:"10px"}}>Summary</h3>
          </div>
          <p>Hi, I'm Vikrant Prajapati, a passionate Full-Stack Developer specializing in backend development with expertise in Node.js, Express.js, MongoDB, and MySQL. I enjoy building scalable and efficient web applications that provide seamless user experiences.</p>
        </div>
      </div> */}
      <AboutCard/>
    </div>
  );
}
export default About;
