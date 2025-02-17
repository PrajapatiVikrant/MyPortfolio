import { useState } from 'react'
import Home from './Pages/Home'
import './App.css'
import Navbar from './Component/Navbar'
import About from './Pages/About'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'
import Footer from './Pages/Footer'

function App() {
 

  return (
    <>
    
    <Navbar/>
    <Home/>
    <div className=" bg-blue-950 p-2 pb-4 m-2 mt-0 relative top-[-50px] bg-gradient-to-b from-gray-900 to-gray-100  rounded-t-xl lg:rounded-t-[80px]">
    <About/>
   
    </div>
    <Experience/>
    <Projects/>
    <Footer/>
   
   
    </>
  )
}

export default App
