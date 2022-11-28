import React from 'react'
import styled from 'styled-components';
import Topbar from './Topbar'
// import Video from "/Users/elliottarnold/streaming_dash/streaming-dash/src/components/assets/2.mp4" 
import {ClickContext} from "../App"
import axios from 'axios';

export default function Video2() {
    
 const value = React.useContext(ClickContext)
 
 const {videoCount2,setVideoCount2} = value 


 const test = async() => {
  
 const resp =  await axios.get('http://localhost:8080/test')
 console.log(resp)


}

test()
  
  return (
    <>
    <Topbar />

    
    <Section >
    <div className='vid-container'>
         <video onPlay={() => {setVideoCount2( videoCount2 + 1 )}}  controls height="100%" autoPlay muted width="100%">

         <source src={`${process.env.REACT_APP_NODE_URI_BASE}:8080/video/1/play`} type="video/mp4"/>

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