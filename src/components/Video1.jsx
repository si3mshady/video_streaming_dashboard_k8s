import React from 'react'
import styled from 'styled-components';
import Topbar from './Topbar'

export default function Video1() {
  return (
    <>
    <Topbar />

    <Section >
    <div className='vid-container'>
         <video controls height="100%" autoPlay muted width="100%">

         <source src={"http://localhost:4000/video/0/play"} type="video/mp4"/>

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