import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {ClickContext} from "../App"
import styled from 'styled-components'
ChartJS.register(ArcElement, Tooltip, Legend);





export function App() {
  const value = React.useContext(ClickContext)
  const {videoCount1, videoCount2, videoCount3 , videoCount4,  setVideoCount1, setVideoCount2,setVideoCount3, setVideoCount4} = value 
  
   const data = {
    labels: ['Video1', 'Video2', 'Video3', 'Video4'],
    datasets: [
      {
        label: '# of Votes',
        data: [videoCount1, videoCount2, videoCount3, videoCount4],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
         
        ],
        borderWidth: 1,
      },
    ],
  };
    
  return( 
  <Div>
      <Doughnut data={data} />
  
  </Div>

  )
}

const Div = styled.div`
    ${'' /* display: grid; */}
    display: flex;
    width: 36%;
    height: 50%;
    align-items: center;
    padding: 100px;
    margin-top: 4.9rem;
    gap: 3rem;
    ${'' /* background-color: white; */}
     canvas {
        ${'' /* background-color:white; */}
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
   

        width:50%;
        height: 50%;
    }
`

