// components/LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useRef } from 'react';
import 'chart.js/auto';
import {ClickContext} from "../App"
import styled from 'styled-components'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';


  import { Bar } from 'react-chartjs-2';

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
// function LineChart({ chartData }) {




//     const ref = useRef();
//     const data = {
//         labels: ['labels'],
//         datasets: [{
//           label: 'My First Dataset',
//           data: [65, 59, 80, 81, 56, 55, 40],
//           fill: false,
//           borderColor: 'rgb(75, 192, 192)',
//           tension: 0.1
//         }]
//       };
//   return (
//     <div className="chart-container">
//       <h2 style={{ textAlign: "center" }}>Line Chart</h2>
//       <Line
//        ref={ref}
//         data={data}
//         options={{
//           plugins: {
//             title: {
//               display: true,
//               text: "Users Gained between 2016-2020"
//             },
//             legend: {
//               display: false
//             }
//           }
//         }}
//       />
//     </div>
//   );
// }
// export default LineChart;





export function Line_() {

    const value = React.useContext(ClickContext)
    const {videoCount1, videoCount2, videoCount3 , videoCount4} = value 


    const labels = ['Video Plays'];

     const data = {
      labels,
      datasets: [
        {
          label: 'Video 1',
          data: [videoCount1],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Video 2',
          data: [videoCount2],
          backgroundColor: 'rgba(13, 162, 35, 0.5)',
        },{
            label: 'Video 3',
            data: [videoCount3],
            backgroundColor: 'rgba(53, 12, 25, 0.5)',
          },{
            label: 'Video 4',
            data: [videoCount4],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          }
      ],
    };

     const options = {
        responsive: true,
       
     
      };

  return ( 
  
  <Div >
  <Bar options={options}   width={500}
  height={500} data={data} />

  </Div>

  
  
  
  )
  
  
  ;
}


const Div = styled.div`
    ${'' /* display: grid; */}
    display: flex;
    width: 50%;
    height: 50%;
    align-items: center;
    padding: 100px;
    margin-top: 7.9rem;
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

    @media (max-width: 1223px) {
 
 display: none;
 }

`
