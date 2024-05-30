import React from "react";
import Card from "./Card";
import "./Project.css";




function Project() {
  return (
    <div className="projectvideo">
        <br />
      <li>MERN technology</li>
      <br />
      <div className="technology">
        <Card name = "Socialmedia" source1 = "https://www.linkedin.com/posts/vikrant-prajapati-b82b5a269_activity-7201888184958398467-j5pZ?utm_source=share&utm_medium=member_desktop" source2="https://social-media-6hxs.vercel.app/" discription = "In this project i have created some features like login and signup with jwt , User can send freind request , user can create connection by accept request , User can upload and delete post. , User can like and comment on that post , User can chat with his/her connection https://github.com/PrajapatiVikrant/ Socialmedia (backend) https://github.com/PrajapatiVikrant/ Social-media (frontend)"  />
        <Card name = "Shopping Cart(Meesho clone)" source1 = "https://www.linkedin.com/posts/vikrant-prajapati-b82b5a269_activity-7201919365670211585-uxX8?utm_source=share&utm_medium=member_desktop" source2="https://my-meesho-frontend.vercel.app/" discription = "In this project i have created some features like login/signUp,display all product with filtering and you can add,delete,edit and read item in own cart and give your order and you also can track your order but this is only for desktop https://github.com/PrajapatiVikrant/ MyMeeshoFrontend https://github.com/PrajapatiVikrant/ MeeshoBackend"  />
        <Card name = "Text Editor" source1 = "https://www.linkedin.com/posts/vikrant-prajapati-b82b5a269_activity-7201896160947572736-ON2g?utm_source=share&utm_medium=member_desktop" source2="https://text-editor-vikrant.vercel.app/" discription = 'I have created this project using MERN technology in which we can do CRUD operation. https://github.com/PrajapatiVikrant/ Text-Editor ( frontend ) https://github.com/PrajapatiVikrant/ Texteditor- (backend)'/>
        <Card name = "TimeShipping" source1 = "https://www.linkedin.com/posts/vikrant-prajapati-b82b5a269_activity-7201945227203387392-7FdE?utm_source=share&utm_medium=member_desktop" source2="https://time-shipping-frontend.vercel.app/" discription = 'I have created this project using MERN technology in which user can login/signup as employee/manager in which employee can send project data and can see all sent data by himself but employee cannot change sent data and as manager user can see all data sent by employee and user is also authorised person for delete data and give rate of work. https://github.com/PrajapatiVikrant/ TimeShipping-Frontend https://github.com/PrajapatiVikrant/ TimeShipping (backend)'/>
        <Card name = "Todo list" source1 = "https://w3dev-assignment-frontend.vercel.app/" source2 = "https://w3dev-assignment-frontend.vercel.app/" discription = "In this you can login/signUp and after that you can perform crud(create,read,update,delete) operation."  />
      </div>
      <br />
      <li>React Project</li>
      <br />
      <div className="technology">
        <Card name = "React template" source1 = "https://vikrant-assiment.vercel.app/" source2="https://vikrant-assiment.vercel.app/" discription = "This is a static react template.In this project i have used reusable componants to design this template"  />
      </div>
  

     
    </div>
  );
}
export default Project;
