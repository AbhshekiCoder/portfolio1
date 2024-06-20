import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import './App.css'
import {Route, Router, Routes} from 'react-router-dom';
import About from './Components/About';

function App() {
  const [toggle, setToggle] = useState("white");
  const [item, setItem] = useState("");
    
  let mode = ()=>{
      if(toggle == "white"){
          setToggle("black");
          localStorage.setItem("mode1", "black");
          
      }
      else{
        setToggle("white");
        localStorage.setItem("mode1", "white");
      }
  }
  let mode1 = localStorage.getItem("mode1");
  useEffect(()=>{
    if(mode1 == "black"){
      setToggle("black");
      document.querySelector('.form-check-input').checked = true;
    }
    else{
      setToggle("white")
      document.querySelector('.form-check-input').checked = false;
    }

  },[])
  
  

  return (
    <>
    <div className= '  maincontainer h-full'  style={{backgroundColor: toggle == 'white'?'white':'black', color: toggle == 'white'?'black':'white'}}>

    <Navbar profile1={toggle} mode={mode}/>
    <Routes>
      <Route path ='/' element = {<Main profile1 = {toggle}/>}></Route>
      <Route path ='/About' element = {<About profile1={toggle}/>} ></Route>
    </Routes>

   
   
    

    </div>
    
    
   
    </>
  )
}

export default App
