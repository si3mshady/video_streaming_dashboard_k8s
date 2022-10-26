import React from 'react'
import styled from 'styled-components'
import Topbar from './Topbar'

export default function Dashboard() {
  return (
    <>
  <Topbar />
    <Div>
  
    <div className='dashboard_container'>
        <h2>Hello</h2>
    </div>
    </Div>
    </>
  )
}


const Div = styled.div`
display: flex;
justify-content: center;
width: 100vw;
height: 100vh;
background-color: #003047 !important;
.dashboard_container {
    display: flex;
    width: 100%;
    background-color: orange;
    ${'' /* margin: auto; */}
    ${'' /* margin-left: 15vw;  OVERFLOW hidden is needed to hide the body overflow behind the sidebar= but still allow it to be seen when 
    sidebar collapses */}
    overflow: hidden;  
    padding: 2rem;
  
    
    ${'' /* position: relative; */}
    ${'' /* left: 15vw; */}
    h2 {
        align-items: center;
        margin: auto;
    }

}

`