
import './App.css';


import {ThemeProvider, createTheme} from '@mui/material'
import { useState } from 'react';
import Topbar from "./components/Topbar"
import Sidebar from "./components/Sidebar"
import styled from 'styled-components';
 

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const theme = createTheme({

    palette: {
      mode: darkMode? "dark" : "light"
    }
  })

  return (
    <ThemeProvider theme={theme}>

        <Div className='App'> 

        <Topbar />
        
         </Div>
    </ThemeProvider>
   
  );
}

export default App;

const Div = styled.div``