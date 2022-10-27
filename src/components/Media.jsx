import React from 'react'
import styled from 'styled-components'
export default function Media() {

  
  return (
   <Div >
   <div className='video'>
        {/* <iframe width="200" height="200" src="https://www.youtube.com/embed/9CnZVfsyN2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

   </div>
   <div className='video'>
        {/* <iframe width="200" height="200" src="https://www.youtube.com/embed/9CnZVfsyN2I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

   </div>
   <div className='video'>
        {/* <iframe width="200" height="200" src="https://www.youtube.com/embed/9CnZVfsyN2I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

   </div>
   <div className='video'>
        {/* <iframe width="200" height="200" src="https://www.youtube.com/embed/9CnZVfsyN2I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

   </div>
   </Div>
    
  )

}

const Div = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
margin-left: 200px;
margin-top: 4rem;
gap: .1rem;
.video {
    padding: 20px;
    width: 100px;
    height: 100px;
    border-radius: 1px solid orange;
    background-color: orange;
    
}

`