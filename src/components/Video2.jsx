import React from 'react'
import styled from 'styled-components';
import Topbar from './Topbar'

export default function Video2() {
  return (
    <>
    <Topbar />

    <Section >
    <div>Video2</div>
    </Section>
   

 </>
   
 
  )
}


const Section = styled.section`
width: 100vw;
height: 100vh;
background-color: white;
.vid-container {
    height: 100%;
   
}
`