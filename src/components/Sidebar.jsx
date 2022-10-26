import React from 'react'
import { Box, IconButton, useTheme } from '@mui/system'
import styled from 'styled-components';
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4  } from "react-icons/ri";


export default function Sidebar() {
  return (
    <Section >

    <div className='icons'>
      <ul>
        <li>
          <RiNumber1 />
        </li>

        <li>
          <RiNumber2 />
        </li>

        <li>
          <RiNumber3 />
        </li>
        <li>
          <RiNumber4 />
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
    
    list-style-type: none;
    line-spacing: 4rem;
     li  {
   
      
      align-items: center;
      width: 60px;
      height: 60px;
      font-size: 2rem;
      display: flex;

      color: orange; 
     }

     li:nth-child(n) {
      justify-content: center;
      margin-top: 10px;
      background-color: black;
      text-align: center;
      border-radius: 50%;
      
     }
  
  }
}

`