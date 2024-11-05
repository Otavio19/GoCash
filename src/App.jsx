import './App.css'
import { useState } from 'react';

//Components
import { Grid2 } from '@mui/material'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { Box } from '@mui/material';
import { Outlet } from "react-router-dom";
import Login from './pages/Login'

function App() {

  const [login, setLogin] = useState(false)
  
  return (
    <>
      {
        login ? <>
          <Box position="sticky" top={0} zIndex={1000}>
            <NavBar setLogin={setLogin} />
          </Box>
          <Grid2 container justifyContent="center" alignItems="center">
            <Grid2 item size={{ md: 10, xs: 10, sm: 6 }} style={{ marginTop: '2rem' }}>
              <Outlet />
            </Grid2>
          </Grid2>
        </> : <Login setLogin={setLogin}/>
      }
    </>
  )
}

export default App
