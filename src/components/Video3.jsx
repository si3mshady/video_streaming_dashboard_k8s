import React from 'react'
import styled from 'styled-components';
import Topbar from './Topbar'
import Video from "/Users/elliottarnold/streaming_dash/streaming-dash/src/components/assets/4.mp4" 

export default function Video3() {
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
background-color: green;
.vid-container {
    height: 100%;
   
}
`