import React from 'react'
import styled from 'styled-components';
import Topbar from './Topbar'
import Video from "/Users/elliottarnold/streaming_dash/streaming-dash/src/components/assets/4.mp4" 

export default function Video4() {
  return (
    <>
    <Topbar />

    
    <Section >
    <div className='vid-container'>
         <video controls height="100%" autoPlay  width="100%">

        <source src={Video} type="video/mp4"/>

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
display: flex;
justify-content: center;
align-items: center;
margin: auto;
.vid-container {
   
    width: 90%;
    height: 100%;
    background-color: #003047 !important;
  


   
   
}
`