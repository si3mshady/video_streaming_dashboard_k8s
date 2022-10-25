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
            <input  placeholder='search' />  
            <FaSearch />
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
    margin-left: 2.5rem;
    span {
        color: #06A2BF; 
    }
}

.search {
    margin-right: 1rem;
    ${'' /* transition: .3s ease-in-out; */}
    input {
        color: orange;
        border: none;
        background-color: transparent;

        padding: 1rem 8rem 1rem 1rem;
        &:focus {
        outline: none;
        font-family: "Permanent Marker";
        background-color: gold;
        color: black;
    }
    }
}
`

