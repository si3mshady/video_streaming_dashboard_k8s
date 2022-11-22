import React from 'react'
import styled from 'styled-components'
import Topbar from './Topbar'
import Media from './Media'
import {App} from './Donut'
import MediaRefactor from './Media_refactor'
import {Line_} from "./Line"
export default function Dashboard() {

 
  return (
    <>
  <Topbar />
    <Div>
  
    <div className='dashboard_container'>
        <div className='dashboard_container__top'>
                {/* <Media /> */}
                <MediaRefactor />
                <Line_ />
    
        </div>

        <div className='dashboard_container__bottom'>
        <App />
        <App />
       
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

    padding: 0 34px 0 0;
    ${'' /* margin: auto; */}
    ${'' /* margin-left: 15vw;  OVERFLOW hidden is needed to hide the body overflow behind the sidebar= but still allow it to be seen when 
    sidebar collapses */}
    overflow: hidden;  
    ${'' /* padding: 2rem; */}
    &__top {
        width: 100%;
        justify-content: space-between;
        align-items: center;
        ${'' /* background-color:  blue; */}
        height: 50%;
        margin: 0 30px;
        display: flex;
        ${'' /* grid-template-columns: repeat(2, 1fr); */}
    }

    &__bottom {
        width: 100%;
        justify-content: space-between;
        align-items: center;
        height: 50%;
        margin: 0 30px;
        display: flex;
        ${'' /* grid-template-columns: repeat(2, 1fr); */}

       > * :first-of-type() {
            background-color: white;
        }

        > * :nth-of-type(1) {
            ${'' /* background-color: orange; */}
            margin-left: 5rem;
        }
    }
}

`


// https://github.com/reactchartjs/react-chartjs-2/issues/1037