import React from 'react'
import styled from 'styled-components';
import Topbar from './Topbar'

export default function Video3() {
  return (
    <>
    <Topbar />

    <Section >
    <div>Video3</div>
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