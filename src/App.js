
import './App.css';


import { useState } from 'react';
import Topbar from "./components/Topbar"
import Sidebar from "./components/Sidebar"
import styled from 'styled-components';
 

function App() {


  return (
   

        <Div className='App'> 

        <Topbar />
        <Sidebar />
        
         </Div>

   
  );
}

export default App;

const Div = styled.div``