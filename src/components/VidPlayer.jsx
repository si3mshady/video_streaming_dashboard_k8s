import React from 'react'
import styled from 'styled-components';
import Topbar from './Topbar'


export default function VideoPlayer({content, count, setCount }) {
  return (
    <>
    {/* <Topbar />   */}

    
    <Section >
    <div className='video vid-container'>
         <video controls height="100%" autoPlay muted  width="100%">

        <source src={content} type="video/mp4"/>

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



.video {
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 290px;
  height: 200px;
  ${'' /* border-radius: 1px solid orange; */}
  background-color: orange;

   video {
    height: 80% !important;
    width: 80% !important;
  }
  
}
`