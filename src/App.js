
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

function App() {


  return (
   

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

   
  );
}

export default App;

const Div = styled.div`
` 