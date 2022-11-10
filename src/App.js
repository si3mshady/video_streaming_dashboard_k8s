
import './App.css';

import {Link, Router,Route, Routes} from 'react-router-dom'

import { useState } from 'react';

import Sidebar from "./components/Sidebar"
import styled from 'styled-components';
import Dashboard from './components/Dashboard';
import Video1 from './components/Video1';
import Video2 from './components/Video2';
import Video3 from './components/Video3';
import Video4 from './components/Video4';
import React from 'react';

export const ClickContext = React.createContext()
function App() {
  const [videoCount1, setVideoCount1] = React.useState(0)
  const [videoCount2, setVideoCount2] = React.useState(0)
  const [videoCount3, setVideoCount3] = React.useState(0)
  const [videoCount4, setVideoCount4] = React.useState(0)



  return (
   
    <ClickContext.Provider value={{videoCount1,videoCount2,videoCount3,videoCount4, setVideoCount1, setVideoCount2, setVideoCount3, setVideoCount4}}>

   

        <Div className='App'> 
  
        <Sidebar />
        <Routes >
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/v1" element={<Video1 />} />
                <Route path="/v2" element={<Video2 />} />
                <Route path="/v3" element={<Video3 />} />
                <Route path="/v4" element={<Video4 />} />
              
       </Routes>



         </Div>
      </ClickContext.Provider>
   
  );
}

export default App;

const Div = styled.div`
` 