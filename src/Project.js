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
        <Card name="Socialmedia" source1="https://www.linkedin.com/posts/vikrantprajapati_i-have-updated-my-socialmedia-project-activity-7220008967224086528-yvBp?utm_source=share&utm_medium=member_desktop" source2="https://vikrant-socialmedia-frontend.vercel.app" discription="In this project i have created some features like login and signup with jwt , User can send freind request , user can create connection by accept request , User can read, upload, edit and delete own post. , User can like and comment on that post , User can chat with his/her connection." />
        <Card name="Shopping Cart(Meesho clone)" source1="https://www.linkedin.com/posts/vikrantprajapati_i-have-created-shopping-cart-activity-7201919365670211585-e-Bq?utm_source=share&utm_medium=member_android" source2="https://my-meesho-frontend.vercel.app/" discription="In this project i have created some features like login/signUp,display all product with filtering and you can add,delete,edit and read item in own cart and give your order and you also can track your order but this is only for desktop" />
        <Card name="Text Editor" source1="https://www.linkedin.com/posts/vikrantprajapati_i-have-created-file-management-system-activity-7201896160947572736-dJiu?utm_source=share&utm_medium=member_android" source2="https://text-editor-vikrant.vercel.app/" discription='I have created this project using MERN technology in which we can do CRUD operation.' />
        <Card name="TimeShipping" source1="https://www.linkedin.com/posts/vikrantprajapati_i-have-created-timeshipping-system-activity-7201945227203387392-Hfsc?utm_source=share&utm_medium=member_android" source2="https://time-shipping-frontend.vercel.app/" discription='I have created this project using MERN technology in which user can login/signup as employee/manager in which employee can send project data and can see all sent data by himself but employee cannot change sent data and as manager user can see all data sent by employee and user is also authorised person for delete data and give rate of work.' />
       
      </div>
      <br />
      <li>Next+Node.js Project</li>
      <br />
      <div className="technology">
        <Card name="Watch store"  source2="https://ecomerce-blue-two.vercel.app/" discription="This is a full stack ecomerce website. Here user can do login/Signup, category selection, product selection, cart management, send order with payment gateway" />
      </div>
      <li>React Project</li>
      <br />
      <div className="technology">
        <Card name="React template" source1="https://vikrant-assiment.vercel.app/" source2="https://vikrant-assiment.vercel.app/" discription="This is a static react template.In this project i have used reusable componants to design this template" />
        <Card name="Accuknox assignment" source1="https://accuknox-assignment-one.vercel.app/" source2="https://accuknox-assignment-one.vercel.app/" discription="This is crud project. This project include multiple category and user can add , remove , edit , read any widget in any category and user can search any widget by name. " />
      </div>



    </div>
  );
}
export default Project;
