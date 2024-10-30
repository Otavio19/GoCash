import './App.css'

//Components
import { Grid2 } from '@mui/material'
import NavBar from './components/NavBar'
import Home from './pages/Home'

import { useState } from 'react'

function App() {

  const [ sizePcMenu, setSizePcMenu ] = useState(1);
  const [ sizeMobileMenu, setSizeMobileMenu ] = useState(2);

  const [ sizePcMain, setSizePcMain ] = useState(10);
  const [ sizeMobileMain, setSizeMobileMain ] = useState(10);

  const alterSizePc = () =>{
    if(sizePcMenu == 1){
      setSizeMobileMenu(2)
      setSizeMobileMain(10)
      return setSizePcMenu(2)
    }
    setSizeMobileMenu(4) // Menu CEL
    setSizeMobileMain(7)
    return setSizePcMenu(1)
  }

  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 item size={{ md: sizePcMenu, sm: 2, xs: sizeMobileMenu }} sx={{transition: 'width 0.5s ease'}}>
          <NavBar openMenu={alterSizePc}/>
        </Grid2>
        <Grid2 item size={{ md: sizePcMain, sm: 8, xs: sizeMobileMain }}>
          <Home />
        </Grid2>      
      </Grid2>
    </>
  )
}

export default App
