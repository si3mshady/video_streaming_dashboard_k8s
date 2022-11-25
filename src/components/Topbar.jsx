import React from 'react'
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";

export default function Topbar() {
  return (
    <Nav>
        <div className="nav-container">
                <h4>Hey Arnold!</h4>
                <h1>Welcome to your <span>Streaming Video </span> Dashboard!!</h1>
        </div>

        <div className='search'>
        <FaSearch />
            <input type="text"  placeholder='search' />
        </div>
    
    </Nav>
  )


}

const Nav = styled.nav`
z-index: 999999;
display: flex;
justify-content: space-between;
background-color: #003047 !important;
border-bottom: 2px solid orange;
color: orange;
align-items: center;
height: 10vh;
position: fixed;
width: 100vw;
${'' /* z-index: 3; */}
.nav-container {

    flex-direction: column;
    margin-left: 02.5rem;
    h4, h1 {
        font-size: 1rem;
        letter-spacing: 3px;
    }
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
       
        color:  #ffc107;
    } 

   
    input {
        color: orange;
        border: none;
        background-color: transparent;
        border-radius: .8rem;
        padding: 1rem 8rem 1rem 1rem;
          font-family: "Permanent Marker";
        &:focus {
        outline: none;
        font-family: "Permanent Marker";
        background-color: gold;
        color: black;
    }


    &::placeholder {
        color:  #ffc107;
        font-family: "Permanent Marker";
  
    }

   
    
    
}

@media (max-width: 1223px) {
 text-align: center;
        display: none;
        margin: auto;
        ${'' /* background-color: red; */}

}


`

