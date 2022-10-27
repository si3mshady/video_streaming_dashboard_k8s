import React from 'react'
import styled from 'styled-components'
import Topbar from './Topbar'

export default function Dashboard() {
  return (
    <>
  <Topbar />
    <Div>
  
    <div className='dashboard_container'>
        <div className='dashboard_container__top'>


        </div>

        <div className='dashboard_container__bottom'>

        </div>
    </div>
    </Div>
    </>
  )
}


const Div = styled.div`
display: flex;
${'' /* justify-content: center; */}
width: 100vw;
height: 100vh;

background-color: #003047 !important;
.dashboard_container {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: orange;
    padding: 0 34px 0 0;
    ${'' /* margin: auto; */}
    ${'' /* margin-left: 15vw;  OVERFLOW hidden is needed to hide the body overflow behind the sidebar= but still allow it to be seen when 
    sidebar collapses */}
    overflow: hidden;  
    ${'' /* padding: 2rem; */}
    &__top {
        width: 100%;
        background-color:  blue;
        height: 50%;
        margin: 0 30px;
        display: grid;
    }

    &__bottom {
        width: 100%;
        background-color:  red;
        height: 50%;
        margin: 0 30px;
        display: grid;
    }
}

`