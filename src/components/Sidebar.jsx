import React from 'react'
import { Box, IconButton, useTheme } from '@mui/system'
import styled from 'styled-components';
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4  } from "react-icons/ri";

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

  
      <ul>
      SELECT
        <li onMouseOver={() => setHover(1)} onMouseLeave={() => {setHover(0)}}>
         { hover == 1 ? <AiFillPlayCircle /> : <RiNumber1 /> }
        </li>

        <li onMouseOver={() => setHover(2)} onMouseLeave={() => {setHover(0)}}>
         { hover == 2 ? <AiFillPlayCircle /> : <RiNumber2 /> }
        </li>

        <li onMouseOver={() => setHover(3)} onMouseLeave={() => {setHover(0)}}>
         { hover == 3 ? <AiFillPlayCircle /> : <RiNumber3 /> }
        </li>

         <li onMouseOver={() => setHover(4)} onMouseLeave={() => {setHover(0)}}>
         { hover == 4 ? <AiFillPlayCircle /> : <RiNumber4 /> }
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

${'' /* top: 0;
z-index: -1; */}
left: 0;
transition: all .4s;
${'' /* transform: translateX(-100%); */}

transform: ${(props) => (props.open ? "translateX(-79%)": "translateX(0%)") };
opacity: ${(props) => (props.open ? .4: 1) };
transition: all 2.9s;
background-color: white;
display: flex;
${'' /* justify-content: center; */}
flex-direction: column;
background-color: #003047 !important;
.toggle {
  margin-left: 180px;
}
.icons {

  margin: auto;
  ul {
    margin: 0 0 0 22px;
    width:100%;
    padding: 20px;
    color: orange;
    ${'' /* background-color: orange; */}
    border: 1px solid black;
    list-style-type: none;
    line-spacing: 4rem;
     li  {
   
      transition: ease-in-out;
      align-items: center;
      width: 60px;
      height: 60px;
      font-size: 2rem;
      display: flex;
      cursor: pointer; 
      color: orange; 
     }

     li:nth-child(n) {
      justify-content: center;
      margin-top: 10px;
      background-color: black;
      text-align: center;
      border-radius: 50%;

      :hover {
        color: green;
        transition: .8s ease-in-out;
      }
      
     }
  
  
  }
}

.open {
  transform: translateX(0%);
  transition: all .4s;
}

.close {
  transition: all .4s;
  transform: translateX(-100%);
}
`