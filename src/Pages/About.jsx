import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative } from "swiper/modules";
import { motion } from "framer-motion";
import { MdDescription } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";



const About = () => {
  return (
    <div id="about">
      <header className="flex flex-col justify-center items-center text-3xl lg:text-4xl font-bold text-white">
        <h1 className="text-2xl">About</h1>
        <h2>Explore my World</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5 text-white">
        <section className="h-fit border">
          <h3 className="text-3xl flex items-center font-bold m-4"><MdDescription /> Summary</h3>
          <p className="text-xl p-4">
            👋 Hi, I'm Vikrant Prajapati, a passionate Full-Stack Developer with
             a strong focus on backend development. I love building scalable, high-performance
              web applications using Node.js, Express.js, MongoDB, and MySQL. Currently, 
              I'm working as a Full-Stack Development Intern at Physics Wallah, 
              where I am honing my skills in real-world projects.
          </p>
        </section>
        <section className="h-fit border">
          <h3 className="text-3xl flex items-center font-bold m-4"><MdCastForEducation />Education</h3>
          <ul className=" text-xl p-4 ">
             <li><b>Bachelor of Computer Applications (BCA)</b> – Samrat Prithvi Raj Chauhan Degree College (2021 - 2024)</li>
             <li><b>12th Grade</b> –  Jain Inter College (2020 - 2021)</li>
             <li><b>10th Grade</b> –  Arwatchin Bharti Bhawan Inter College (2018 - 2019)</li>
          </ul>
        </section>
        <section className="h-fit border">
          <h3 className="text-3xl flex items-center font-bold m-4"><GiSkills />Skills</h3>
          <ul className="text-xl p-4">
            <li><b>Programming Languages</b> - Javascript, C++, OOP, SQL, Python</li>
            <li><b>Learning Framework or Library</b> - Typescript, Tailwindcss, React, Next, Express.js</li>
            <li><b>Databases</b> - Mongodb, MySQL</li>
            <li><b>Development skills</b> - RESTfull APIs, JWT authentication, Frontend and Backend intergration, github, Deployment</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
