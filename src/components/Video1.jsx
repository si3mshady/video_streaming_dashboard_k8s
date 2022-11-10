import React from 'react'
import styled from 'styled-components';
import Topbar from './Topbar'

export default function Video1() {
  return (
    <>
    <Topbar />

    <Section >
    <div>Video1</div>
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
   
}
`