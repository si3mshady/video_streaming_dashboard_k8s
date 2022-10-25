import React from 'react'
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";

export default function Topbar() {
  return (
    <Nav>
        <div className="nav-container">
                <h4>Hey Arnold!</h4>
                <h1>Welcome to the <span>Streaming Video </span> Dashboard </h1>
        </div>

        <div className='search'>
        <FaSearch />
            <input type="text"  placeholder='search' />
           
     
        </div>
    
    </Nav>
  )


}



const Nav = styled.nav`

display: flex;
justify-content: space-between;
background-color: #003047 !important;
color: orange;
align-items: center;
height: 10vh;
.nav-container {

    flex-direction: column;
    margin-left: 02.5rem;
    span {
        color: #06A2BF; 
    }
}

.search {
    margin-right: 1rem;
    ${'' /* transition: .3s ease-in-out; */}
    display: flex;
    align-items: center;

    svg {
        margin-right: -80px;
        color: black;
        z-index: 1;
        color:  #ffc107;
    } 

   
    input {
        color: orange;
        border: none;
        background-color: transparent;
        border-radius: .8rem;
        padding: 1rem 8rem 1rem 1rem;
        &:focus {
        outline: none;
        font-family: "Permanent Marker";
        background-color: gold;
        color: black;
    }


    &::placeholder {
        color:  #ffc107;
  
    }

   
    
    
}

`

