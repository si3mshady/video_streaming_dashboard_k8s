
import './App.css';

import {Link, Router,Route, Routes} from 'react-router-dom'

import { useState } from 'react';

import Sidebar from "./components/Sidebar"
import styled from 'styled-components';
import Dashboard from './components/Dashboard';

function App() {


  return (
   

        <Div className='App'> 
  
        <Sidebar />


            
        <Routes >
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/" element={<video1 />} /> */}
                {/* <Route path="/" element={<video2 />} /> */}
                {/* <Route path="/" element={<video3 />} /> */}
                {/* <Route path="/" element={<video4 />} /> */}
              
       </Routes>



         </Div>

   
  );
}

export default App;

const Div = styled.div`
` 