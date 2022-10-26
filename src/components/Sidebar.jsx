import React from 'react'
import { Box, IconButton, useTheme } from '@mui/system'
import styled from 'styled-components';
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 , RiMovieFill} from "react-icons/ri";

import { AiFillPlayCircle } from "react-icons/ai";
import { BsToggleOn,BsToggleOff } from "react-icons/bs";

export default function Sidebar() {
  const [hover, setHover] = React.useState(0)
  const [open, setOpen] = React.useState(false)

  return (
    <Section open={open} >
  <div >

  <div className='toggle' onClick={() => {setOpen((prev) => !prev)}}>
      {open ? <BsToggleOff/> : <BsToggleOn/>}
    </div>

    <div className='icons'>
          <div className="icons__header">
          <RiMovieFill /> <span>SELECT</span>
          </div>
    
      <ul>
   
        <li onMouseOver={() => setHover(1)} onMouseLeave={() => {setHover(0)}}>
        <a>

          <span> Video </span> { hover == 1 ? <AiFillPlayCircle /> : <RiNumber1 /> }


        </a>

        </li>

        <li onMouseOver={() => setHover(2)} onMouseLeave={() => {setHover(0)}}>

        <a>

            <span> Video </span> { hover == 2 ? <AiFillPlayCircle /> : <RiNumber2 /> }


        </a>
       
        </li>

        <li onMouseOver={() => setHover(3)} onMouseLeave={() => {setHover(0)}}>
        <a>

          <span> Video </span> { hover == 3 ? <AiFillPlayCircle /> : <RiNumber3 /> }


          </a>
        </li>

         <li onMouseOver={() => setHover(4)} onMouseLeave={() => {setHover(0)}}>
         <a>

          <span> Video </span> { hover == 4 ? <AiFillPlayCircle /> : <RiNumber4/> }


        </a>
        </li>
      </ul>
    </div>

  </div>
   
      
    </Section>
  )
}

const Section = styled.section`
border-top: 1px solid black;
transition: 0.5s;
width: 15vw;
height: 100vh;
position: fixed;

left: 0;
transition: all .4s;


transform: ${(props) => (props.open ? "translateX(-79%)": "translateX(0%)") };
opacity: ${(props) => (props.open ? .4: 1) };
transition: all 2.9s;
background-color: white;
display: flex;

flex-direction: column;
background-color: #003047 !important;
.toggle {
  margin-left: 180px;
  color: #06A2BF;
  font-size: 1.9rem;
}
.icons {

  &__header {
   display: flex;
   align-items: center;
   justify-content: center;
   padding-top: 10%;
   color: orange;
   gap: 1rem;
   font-size: 2rem;
  }
  margin: auto;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20%;
    width:100%;
   
    padding: 20px;
    color: orange;
    ${'' /* background-color: orange; */}
    ${'' /* border: 1px solid black; */}
    list-style-type: none;

    span {
      margin: auto;
    }
    
     li  {
      justify-content: center;
      transition: ease-in-out;
      align-items: center;
     
     
      width: 100%;
      height: 60px;
      font-size: 1rem;
      display: flex;
      cursor: pointer; 
      color: orange; 
      
     }

     li > a {
      display: flex;
      align-items: center;
      letter-spacing: 12px;
     }

     li:nth-child(n) {
      justify-content: center;
      margin-top: 10px;
      border-bottom: 1px solid  #06A2BF;
  
      :hover {
        color: green;
        transition: .8s ease-in-out;
      }
      
     }
  
  
  }
}


`