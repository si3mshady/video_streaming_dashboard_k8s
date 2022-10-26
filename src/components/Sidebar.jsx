import React from 'react'
import { Box, IconButton, useTheme } from '@mui/system'
import styled from 'styled-components';
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4  } from "react-icons/ri";

import { AiFillPlayCircle } from "react-icons/ai";

export default function Sidebar() {
  const [hover, setHover] = React.useState(0)
  return (
    <Section >

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
background-color: white;
display: flex;
justify-content: center;
background-color: #003047 !important;
.icons {
  margin: 40% 0;
  ul {
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

`