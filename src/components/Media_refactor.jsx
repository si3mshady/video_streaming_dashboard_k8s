import React from 'react'
import styled from 'styled-components'
import Donut from '../components/Donut'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import {ClickContext} from "../App"


const VID = ({setter, getter, content, id }) => (
<div className='video'>
     <video  onPlay={() => {setter( getter + 1 )}}     controls height="100%"  muted  width="100%">
     {/* <source src={`http://${process.env.REACT_APP_NODE_URL}/video/${id}/play`} type="video/mp4"/> */}
     <source src={`${process.env.REACT_APP_NODE_URI_BASE}:8080/video/${id}/play`} type="video/mp4"/>

    </video>
    
</div> )

export default function Media() {

  
 const value = React.useContext(ClickContext)
 const {videoCount1, videoCount2, videoCount3 , videoCount4,  setVideoCount1, setVideoCount2,setVideoCount3, setVideoCount4} = value 
 const countList = [videoCount1, videoCount2, videoCount3 , videoCount4]
 const setList=  [setVideoCount1, setVideoCount2,setVideoCount3, setVideoCount4] 
  
  return (
   <Div >

  { countList.map((_,index) => (
    <VID key={index}
        getter={countList[index]} 
        setter={setList[index]}
        id={index}
        />))  }
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


@media (max-width: 1223px) {
  ${'' /* z-index: - 10; */}
  overflow-y: scroll;
margin: auto;
  display: grid;
  margin-top: 10vh;
grid-template-columns: repeat(1,1fr);
.video {
  ${'' /* background-color: #003047 !important; */}
  background-color: orange;

  margin: auto;
  ${'' /* height: 50vh !important; */}
      height: 50vh !important;
      width: 100% !important;
}
  }


`