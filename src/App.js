
import './App.css';


import { useState } from 'react';

import Sidebar from "./components/Sidebar"
import styled from 'styled-components';
import Dashboard from './components/Dashboard';

function App() {


  return (
   

        <Div className='App'> 
        <Dashboard />
        <Sidebar />
        
         </Div>

   
  );
}

export default App;

const Div = styled.div`
`