import React from 'react'
import styled from 'styled-components'
import Donut from '../components/Donut'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Video1 from "/Users/elliottarnold/streaming_dash/streaming-dash/src/components/assets/1.mp4" 
import Video2 from "/Users/elliottarnold/streaming_dash/streaming-dash/src/components/assets/2.mp4" 
import Video3 from "/Users/elliottarnold/streaming_dash/streaming-dash/src/components/assets/3.mp4" 
import Video4 from "/Users/elliottarnold/streaming_dash/streaming-dash/src/components/assets/4.mp4" 


import {ClickContext} from "../App"



const video_imports = [Video1, Video2, Video3, Video4] 

const VID = ({setter, getter, content}) => (
<div className='video'>
     <video  onPlay={() => {setter( getter + 1 )}}     controls height="100%"  muted  width="100%">

    <source src={content} type="video/mp4"/>

    </video>
    
</div> )

export default function Media() {

  
 const value = React.useContext(ClickContext)
 const {videoCount1, videoCount2, videoCount3 , videoCount4,  setVideoCount1, setVideoCount2,setVideoCount3, setVideoCount4} = value 
 const countList = [videoCount1, videoCount2, videoCount3 , videoCount4]
 const setList=  [setVideoCount1, setVideoCount2,setVideoCount3, setVideoCount4] 
  
  return (
   <Div >

  { video_imports.map((_,index) => (
    <VID key={index}
        getter={countList[index]} 
        setter={setList[index]}
        content={video_imports[index]} />))  }
   </Div>
    
  )

}

const Div = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
margin-left: 200px;
margin-top: 14rem;
padding: 1rem 2rem 3rem 2rem;
gap: 1rem;
${'' /* width: 500px; */}

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