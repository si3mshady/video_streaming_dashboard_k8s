import React from 'react'
import styled from 'styled-components';
import Topbar from './Topbar'
import {ClickContext} from "../App"
import axios from 'axios'

export default function Video1() {
    
 const value = React.useContext(ClickContext)
 const {videoCount1,setVideoCount1} = value 

  
  return (
    <>
    <Topbar />

    <Section >
    <div className='vid-container'>
         <video onPlay={() => {setVideoCount1( videoCount1 + 1 )}}   controls height="100%" autoPlay muted width="100%">

         <source src={`${process.env.REACT_APP_NODE_URI_BASE}:8080/video/0/play`} type="video/mp4"/>

        </video>
    </div>
    </Section>
   
 </>
  )
}

const Section = styled.section`
width: 100vw;
height: 100vh;
background-color: blue;
.vid-container {
    height: 100%;
    background-color: #003047 !important;
}
`