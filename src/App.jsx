import './App.css'

//Components
import { Grid2 } from '@mui/material'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { Box } from '@mui/material';
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Box position="sticky" top={0} zIndex={1000}>
        <NavBar />
      </Box>
      <Grid2 container justifyContent="center" alignItems="center">
        <Grid2 item size={{ xs: 10, sm: 6 }} style={{ marginTop: '2rem' }}>
          <Outlet />
        </Grid2>
      </Grid2>
    </>
  )
}

export default App
