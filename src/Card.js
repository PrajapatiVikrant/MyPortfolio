import React from "react";
import "./Card.css";



function Card(props) {
 
  return (
    
    <div className="projectcard">
      <h2>{props.name}</h2>
      <img className="cardimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukZ-198m1pn-B2gMhuZdeeU0T379lXGC-tg&s" alt="" />
      <p className="aboutproject">{props.discription}</p>
      <div className="btnctn">
      <a href={props.source1} className="btn">Demo</a>
      <a href={props.source2} className="btn">Live link</a>
      </div>
     
      
    </div>
     
     
  );
}
export default Card;
