import React from 'react'
import styled from 'styled-components';
import Topbar from './Topbar'
// import Video from "/Users/elliottarnold/streaming_dash/streaming-dash/src/components/assets/3.mp4" 
import {ClickContext} from "../App"


export default function Video3() {
    
 const value = React.useContext(ClickContext)
 const {videoCount3 ,setVideoCount3} = value 

  return (
    <>
    <Topbar />

    <Section >
    <div className='vid-container'>
         <video onPlay={() => {setVideoCount3( videoCount3 + 1 )}}  controls height="100%" autoPlay muted width="100%">

         <source src={`${process.env.REACT_APP_NODE_URI_BASE}:8080/video/2/play`} type="video/mp4"/>

        </video>
    </div>
    </Section>
   

 </>
  )
}


const Section = styled.section`
width: 100vw;
height: 100vh;
background-color: #003047 !important;
.vid-container {
    height: 100%;
    background-color: #003047 !important;
}
`