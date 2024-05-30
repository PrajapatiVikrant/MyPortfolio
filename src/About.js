import React from "react";
import "./About.css"
function About() {
  return (
    <div className="resume">
      <div>
        <h1>Who am i?</h1>
        <p>
          A frontend/backend developer i learn frontend and backend by using
          follow
        </p>
        <h2>Frontend:</h2>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>javascript</li>
        <li>React.js</li>
        <h2>backend:</h2>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Mongodb</li>
        <li>MySQL</li>
       
      </div>
      <div>
        <h1>Skills</h1>
        <table>
          <tr>
            <td>C</td>
            <td>
              :<input type="range" value={85} />
              85%
            </td>
          </tr>
          <tr>
            <td>C++</td>
            <td>
              :<input type="range" value={85} />
              85%
            </td>
          </tr>
          <tr>
            <td>Core java</td>
            <td>
              :<input type="range" value={80} />
              80%
            </td>
          </tr>
          <tr>
            <td>HTML5</td>
            <td>
              :<input type="range" value={70} />
              70%
            </td>
          </tr>
          <tr>
            <td>javascript</td>
            <td>
              :<input type="range" value={85} />
              85%
            </td>
          </tr>
          <tr>
            <td>Node.js</td>
            <td>
              :<input type="range" value={90} />
              90%
            </td>
          </tr>
        </table>
      </div>
      <div>
        <h1>Knowledge</h1>
        <h2>Web development:-</h2>
        <p>HTML,CSS,Javascript,React.js <br />,Nodejs, Expressjs,Mongodb,MySQL</p>
        <h2>Languge:-</h2>
        <p>C,C++,Java,javascript,python</p>
        <h2>Data structure & algorithim</h2>
        <p>Array,linkedlist,stack,qeue,tree <br />,searching technique,sorting technique</p>
      </div>
    </div>
  );
}
export default About;
