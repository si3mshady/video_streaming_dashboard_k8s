import React from 'react'
import styled from 'styled-components'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

export default function Media() {

  
  return (
   <Div >
   <div className='video'>
     {/* #VideoContent */}

   </div>
   <div className='video'>
       {/* #VideoContent */}
   </div>
   <div className='video'>
       {/* #VideoContent */}

   </div>
   <div className='video'>
         {/* #VideoContent */}

   </div>
   </Div>
    
  )

}

const Div = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
margin-left: 200px;
margin-top: 4rem;
padding: 1rem 2rem 3rem 2rem;
gap: 1rem;

.video {
    align-self: start;
    padding: 20px;
    width: 200px;
    height: 100px;
    border-radius: 1px solid orange;
    background-color: orange;
    
}

`