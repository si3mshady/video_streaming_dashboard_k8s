import React from 'react'
import styled from 'styled-components'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Video1 from "/Users/elliottarnold/streaming_dash/streaming-dash/src/components/assets/1.mp4" 
import Video2 from "/Users/elliottarnold/streaming_dash/streaming-dash/src/components/assets/2.mp4" 
import Video3 from "/Users/elliottarnold/streaming_dash/streaming-dash/src/components/assets/3.mp4" 
import Video4 from "/Users/elliottarnold/streaming_dash/streaming-dash/src/components/assets/4.mp4" 
export default function Media() {

  let clickTotal = 0

  
  return (
   <Div >
   <div className='video'>
         <video onPlay={() => {console.log('clicked')}}    controls height="100%"  muted  width="100%">

        <source src={Video1} type="video/mp4"/>

        </video>
    </div>


    <div className='video'>
         <video  onPlay={() => {console.log('clicked')}}  controls height="100%"  muted  width="100%">

        <source src={Video2} type="video/mp4"/>

        </video>
    </div>

    <div className='video'>
         <video onPlay={() => {console.log('clicked')}}    controls height="100%"  muted  width="100%">

        <source src={Video3} type="video/mp4"/>

        </video>
    </div>

    <div className='video'>
         <video onPlay={() => {console.log('clicked')}}  controls height="100%"  muted  width="100%">

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
    ${'' /* align-self: start; */}
    ${'' /* padding: 20px; */}
    ${'' /* width: 200px; */}
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