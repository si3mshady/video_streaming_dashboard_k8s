import React from 'react'
import styled from 'styled-components';
import Topbar from './Topbar'

import Video1 from "/Users/elliottarnold/streaming_dash/streaming-dash/src/components/assets/1.mp4" 
import Video2 from "/Users/elliottarnold/streaming_dash/streaming-dash/src/components/assets/2.mp4" 
import Video3 from "/Users/elliottarnold/streaming_dash/streaming-dash/src/components/assets/3.mp4" 
import Video4 from "/Users/elliottarnold/streaming_dash/streaming-dash/src/components/assets/4.mp4" 
import VideoPlayer from './VidPlayer';
const video_imports = [Video1, Video1, Video3, Video4] 


export default function VideoPlayer({video_source}) {
  return (
    <>
    <Topbar />

    
    <Section >
   {video_imports.map(((v,i) => (<VideoPlayer video_source={v} />)))}
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