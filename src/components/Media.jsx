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

import VideoPlayer from './VidPlayer';

export default function Media() {

  
  const value = React.useContext(ClickContext)
  const {videoCount1, videoCount2, videoCount3 , videoCount4,  setVideoCount1, setVideoCount2,setVideoCount3, setVideoCount4} = value 
  
  return (
   <Div >

   


    <div className='video'>
         <video onPlay={() => {setVideoCount1( videoCount1 + 1)}}    controls height="100%"  muted  width="100%">

        <source src={Video1} type="video/mp4"/>

        </video>
        
    </div>


    <div className='video'>
    <video onPlay={() => {setVideoCount2( videoCount2 + 1)}}    controls height="100%"  muted  width="100%">

        <source src={Video2} type="video/mp4"/>

        </video>
    </div>

    <div className='video'>
    <video onPlay={() => {setVideoCount3( videoCount3 + 1)}}    controls height="100%"  muted  width="100%">

        <source src={Video3} type="video/mp4"/>

        </video>
    </div>

    <div className='video'>
    <video onPlay={() => {setVideoCount4( videoCount4 + 1)}}    controls height="100%"  muted  width="100%">

        <source src={Video4} type="video/mp4"/>

        </video>
    </div> 
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