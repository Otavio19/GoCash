import './App.css'

//Components
import { Grid2 } from '@mui/material'
import NavBar from './components/NavBar'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Grid2 container >
        <NavBar />
      </Grid2>
      <Grid2 container size={{ md: 8, sm: 8, xs: 8 }}>
        <Home />
      </Grid2>
    </>
  )
}

export default App
